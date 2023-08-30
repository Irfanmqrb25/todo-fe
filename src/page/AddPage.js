import React from 'react';
import NavBar from '../components/bar/NavBar';
import TodoInput from '../components/TodoInput';

const AddPage = () => {
    return (
        <div className="containerHome">
            <NavBar />
            <TodoInput />
        </div>
    );
}

export default AddPage;
