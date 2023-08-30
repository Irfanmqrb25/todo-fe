import React from 'react';
import NavBar from '../components/bar/NavBar';
import TodoEdit from '../components/TodoEdit';

const EditPage = () => {
    return (
        <div className="containerHome">
            <NavBar />
            <TodoEdit />
        </div>
    );
}

export default EditPage;
