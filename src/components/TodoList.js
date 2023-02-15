import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    const filterUiNameHandler = () => {
        if (props.filterStatus === 'uncompleted') return 'To Do';
        if (props.filterStatus === 'completed') return 'Done';
        if (props.filterStatus === 'deleted') return 'Trash';
    };
    return(
        <div>
            <p className="filter-name">{filterUiNameHandler()}</p>
            <hr />
            <ul className="todo-list">
                {props.filteredTodos.map(todo => (
                    <Todo text={todo.text} key={todo.id}/>
                ))}
            </ul>
        </div>
    )
};

export default TodoList;