import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../style/addTodo.css"
import { useAuthContext } from '../hooks/useAuthContext';

const TodoInput = () => {
    const { user } = useAuthContext();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const onChangeTitleHandler = (e) => {
        setTitle(e.target.value);
    }
    const onChangeDateHandler = (e) => {
        setDate(e.target.value);
    }
    const navigate = useNavigate();
    const saveTodo = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/todo/todos", {
            title, date
        }, {
            headers: { 'Authorization': `Bearer ${user.token}` }
        })
        navigate("/");
        console.log(user)
    }


    return (
        <section className="todoInput">
            <div className="titleTodo">
                <h1>Makes Your Todo</h1>
            </div>
            <hr className='hrInInputTodo' />
            <form className='formContainer' onSubmit={saveTodo}>
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
                <button type='submit'>Submit</button>
            </form>
        </section >
    );
}

export default TodoInput;
