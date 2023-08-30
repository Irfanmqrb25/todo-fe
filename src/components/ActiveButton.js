import React from 'react';
import { FaRedoAlt } from "react-icons/fa"

const ActiveButton = ({ id, onActive }) => {
    return (
        <div className='activeButton'>
            <FaRedoAlt type='button' title='Activate' onClick={() => onActive(id)} />
        </div >
    );
}

export default ActiveButton;
