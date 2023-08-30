import React from 'react';
import { BiTaskX } from "react-icons/bi"

const EmptyListTodo = () => {
    return (
        <div className='emptyMessage'>
            <h1>You not have task.</h1>
            <BiTaskX className='todoEmptyIcon' />
        </div>
    );
}

export default EmptyListTodo;
