import React from 'react';
import { TbTrashOff } from "react-icons/tb";

const EmptyTrash = () => {
    return (
        <div className='EmptyTrash'>
            <TbTrashOff className='iconEmptyTrash' />
            <h1>Trash is empty.</h1>
        </div>
    );
}

export default EmptyTrash;
