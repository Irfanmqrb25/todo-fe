import React from 'react';
import { MdOutlineDoneOutline } from "react-icons/md";

const CompleteButton = ({ id, onCompleted, type }) => {
    return (
        <div className={type === 'exp' ? 'completeButtonExp' : 'completeButton'}>
            <MdOutlineDoneOutline type='button' title='Complete' onClick={() => onCompleted(id)} />
        </div>
    );
}

export default CompleteButton;
