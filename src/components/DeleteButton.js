import { TiDeleteOutline } from "react-icons/ti";

const DeleteButton = ({ id, onDelete, title }) => {
    return (
        <div className='deleteButton'>
            <TiDeleteOutline type='button' title={title} onClick={() => onDelete(id)} />
        </div >
    );
}

export default DeleteButton;
