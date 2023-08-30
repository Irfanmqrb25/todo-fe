import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavBar from '../components/bar/NavBar';
import DeleteButton from '../components/DeleteButton';
import EmptyTrash from '../components/EmptyTrash';
import Searchbar from '../components/Searchbar';
import '../style/CompletePage.css'
import { useAuthContext } from '../hooks/useAuthContext';

const CompletePageList = ({ completedTodos, onDelete }) => {
    const getDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-us', options);
    }

    return (
        <>
            {completedTodos.slice(0).reverse().map((completedTodo) => (
                <div key={completedTodo._id} id={completedTodo._id} className="cardTodo">
                    <h5>{completedTodo.title}</h5>
                    <p className='font-p'>{getDate(completedTodo.date)}</p>
                    <DeleteButton id={completedTodo._id} onDelete={onDelete} />
                </div>
            ))
            }
        </>
    )
}

const CompletePage = () => {
    const [completedTodos, setCompletedTodos] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        if (user) {
            getCompletedTodo();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getCompletedTodo = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/todo/todos/completed", {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            setCompletedTodos(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const permananentDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/todo/todos/completed/${id}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            getCompletedTodo();
        } catch (error) {
            console.log(error)
        }
    }

    const filteredTodos = completedTodos.filter((completedTodo) => {
        return completedTodo.title.toLowerCase();
    })


    return (
        <div className='containerHome'>
            <NavBar />
            <div className="MainBar">
                <Searchbar />
                <div className='containerMyTask'>
                    <h1>Task Completed</h1>
                    <hr className='myTaskHr' />
                    {filteredTodos.length > 0 ? <CompletePageList completedTodos={filteredTodos} onDelete={permananentDelete} /> : <EmptyTrash />}
                </div>
            </div>
        </div>
    );
}

export default CompletePage;
