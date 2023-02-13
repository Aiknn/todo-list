import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    return(
        <ul className="todo-list">
        {props.todos.map(todo => (
            <Todo text={todo.text} key={todo.id}/>
        ))}
    </ul>
    )
};

export default TodoList;