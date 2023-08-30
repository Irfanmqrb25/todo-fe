import React from 'react';
import { RiAddCircleFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const AddButton = () => {
    const navigate = useNavigate();
    function addButton() {
        navigate("/todo/new")
    }
    return (
        <div>
            <RiAddCircleFill className='addButton' type='button' onClick={addButton} />
        </div>
    );
}

export default AddButton;
