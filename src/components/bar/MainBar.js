import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from '../Searchbar';
import TodoItemList from '../TodoItemList';
import EmptyListTodo from '../EmptyListTodo';
import AddButton from '../AddButton';
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';

const MainBar = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [todos, setTodos] = useState([]);
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || ''
    });
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
        await axios.post(`http://localhost:5000/api/todo/todos/${id}`, {}, {
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
        })
        setTodos(response.data)
    }

    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword)
        setSearchParams({ keyword })
    }

    const filteredTodos = todos.filter((todo) => {
        return todo.title.toLowerCase().includes(
            keyword.toLowerCase()
        );
    })

    return (
        <div className='MainBar'>
            <Searchbar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <div className='containerMyTask'>
                <h1>My Task</h1>
                <hr className='myTaskHr' />
                {filteredTodos.length > 0 ? <TodoItemList todos={filteredTodos} className={'font-p'} deleteTodo={deleteTodo} completedTodo={completedTodo} />
                    : <EmptyListTodo />}
            </div>
            <div className="button-add-page">
                <AddButton />
            </div>
        </div>
    );
}

export default MainBar;
