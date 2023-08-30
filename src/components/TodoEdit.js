import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import "../style/addTodo.css";
import { useAuthContext } from '../hooks/useAuthContext';

const TodoEdit = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const { id } = useParams();
    const { user } = useAuthContext();

    useEffect(() => {
        getTodoById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getTodoById = async () => {
        const response = await axios.get(`http://localhost:5000/api/todo/todos/${id}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        setTitle(response.data.title);
        setDate(response.data.date);
    }

    const navigate = useNavigate();
    const onChangeTitleHandler = (e) => {
        setTitle(e.target.value);
    }

    const onChangeDateHandler = (e) => {
        setDate(e.target.value);
    }

    const updateTodo = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/api/todo/todos/${id}`, {
            title,
            date,
        }, {
            headers: { 'Authorization': `Bearer ${user.token}` }
        })
        navigate("/");
    }

    return (
        <section className="todoInput">
            <div className='titleTodo'>
                <h1>Update Your Todo</h1>
            </div>
            <hr className='hrInInputTodo' />
            <form className='formContainer' onSubmit={updateTodo}>
                <label>Do Something New</label>
                <input className='inputTitle'
                    type="text"
                    onChange={onChangeTitleHandler}
                    value={title}
                />
                <label>Date Limit</label>
                <input type="date"
                    onChange={onChangeDateHandler}
                    value={date}
                />
                <button type='submit'>Update</button>
            </form>
        </section >
    );
}

export default TodoEdit;