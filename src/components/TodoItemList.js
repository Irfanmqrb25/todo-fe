import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import CompleteButton from "./CompleteButton";

const TodoItemList = ({ todos, deleteTodo, completedTodo, type }) => {

    const getDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-us', options);
    }

    return (
        <section className="todosItems">
            {todos.slice(0).reverse().map((todo) => (
                <div key={todo._id} id={todo._id} className="cardTodo">
                    <h5>{todo.title}</h5>
                    <p className={type === 'exp' ? 'font-red' : 'font-p'}>{getDate(todo.date)}</p>
                    <DeleteButton id={todo._id} onDelete={deleteTodo} title={"Delete"} />
                    {type === 'exp' ? '' : <EditButton id={todo._id} />}
                    <CompleteButton id={todo._id} onCompleted={completedTodo} type={type === 'exp' ? type = 'exp' : type = ''} />
                </div>
            ))}
        </section>
    );
}

export default TodoItemList;