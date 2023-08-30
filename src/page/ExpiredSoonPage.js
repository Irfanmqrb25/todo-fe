import React, { useState, useEffect } from 'react';
import TodoItemList from '../components/TodoItemList';
import axios from 'axios';
import NavBar from '../components/bar/NavBar';
import Searchbar from '../components/Searchbar';
import '../components/bar/bar.css'
import { useAuthContext } from '../hooks/useAuthContext';

const ExpiredSoonPage = () => {
    const [todos, setTodos] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        if (user) {
            getActiveTodos();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:5000/api/todo/todos/${id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        getActiveTodos();
    }

    const completedTodo = async (id) => {
        await axios.post(`http://localhost:5000/api/todo/todos/${id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        getActiveTodos();
    }

    const getActiveTodos = async () => {
        const response = await axios.get("http://localhost:5000/api/todo/todos", {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        setTodos(response.data);
    }

    const filteredExpTodos = todos.filter((todo) => {
        const currentDate = new Date();
        const expirationDate = new Date();
        expirationDate.setDate(currentDate.getDate() + 5);
        const todoExpirationDate = new Date(Date.parse(todo.date));
        return todoExpirationDate <= expirationDate;
    })

    return (
        <section className='containerHome'>
            <NavBar />
            <div className='MainBar'>
                <Searchbar />
                <div className='containerForYou'>
                    <h1>Expired Soon</h1>
                    <hr className='myTaskHr' />
                    {filteredExpTodos.length > 0 ? <TodoItemList todos={filteredExpTodos} type={'exp'} deleteTodo={deleteTodo} completedTodo={completedTodo} /> : <div className='emptyMessageExp'>
                        <h1>No have task ends anytime soon.</h1>
                    </div>}
                </div>
            </div>
        </section>
    );
}

export default ExpiredSoonPage;
