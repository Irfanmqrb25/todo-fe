import React, { useState, useEffect } from 'react';
import NavBar from '../components/bar/NavBar';
import EmptyTrash from '../components/EmptyTrash';
import "../style/TrashPage.css"
import axios from 'axios';
import ActiveButton from '../components/ActiveButton';
import DeleteButton from '../components/DeleteButton';
import Searchbar from '../components/Searchbar';
import { useAuthContext } from '../hooks/useAuthContext';

const TrashPageList = ({ softDeleteTodos, onActive, onDelete }) => {
    const getDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-us', options);
    }

    return (
        <section>
            {softDeleteTodos.slice(0).reverse().map((softDeleteTodo) => (
                <div key={softDeleteTodo._id} id={softDeleteTodo._id} className="cardTodo">
                    <h5 className='h5'>{softDeleteTodo.title}</h5>
                    <p className='p font-p'>{getDate(softDeleteTodo.date)}</p>
                    <DeleteButton id={softDeleteTodo._id} title={"Delete Permanently"} onDelete={onDelete} />
                    <ActiveButton id={softDeleteTodo._id} onActive={onActive} />
                </div>
            ))
            }
        </section>
    )
}

const TrashPage = () => {
    const [softDeleteTodos, setSoftDeleteTodos] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        if (user) {
            getSoftDeleteTodo();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const filteredTodos = softDeleteTodos.filter((softDeleteTodo) => {
        return softDeleteTodo.title.toLowerCase();
    })

    const getSoftDeleteTodo = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/todo/todos/trash", {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            setSoftDeleteTodos(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const activeTodo = async (id) => {
        try {
            await axios.patch(`http://localhost:5000/api/todo/todos/trash/${id}`,
                {},
                {
                    headers: { 'Authorization': `Bearer ${user.token}` }
                }
            )
            getSoftDeleteTodo();
        } catch (error) {
            console.log(error)
        }
    }

    const permananentDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/todo/todos/trash/${id}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            getSoftDeleteTodo();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='containerHome'>
            <NavBar />
            <div className='MainBar'>
                <Searchbar />
                <div className="containerMyTask">
                    <h1>Trash</h1>
                    <hr className='myTaskHr' />
                    {filteredTodos.length > 0 ? <TrashPageList onActive={activeTodo} onDelete={permananentDelete} softDeleteTodos={filteredTodos} /> : <EmptyTrash />}
                </div>
            </div>
        </div>
    );
}

export default TrashPage;
