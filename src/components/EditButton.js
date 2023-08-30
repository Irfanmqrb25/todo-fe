import React from 'react';
import { FiEdit2 } from "react-icons/fi";
import { Link } from 'react-router-dom';

const EditButton = ({ id }) => {
    return (
        <div>
            <Link to={`todo/edit/${id}`}>
                <FiEdit2 className='editButton' title='Edit' type='button' />
            </Link>
        </div>
    );
}

export default EditButton;