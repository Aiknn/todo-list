import React from "react";

const NewTodo = (props) => {
    const newTodoHandler = (e) => {
        props.setNewTask(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        props.setTodos([
            ...props.todos, {text: props.newTask,}
        ]);
        props.setNewTask("");
    };
    return(
        <form className="new-task">
            <p className="new-task-desc"><label htmlFor="new-task">Add New To Do</label></p>
            <textarea onChange={newTodoHandler} value={props.newTask} name="Text1" cols="22" rows="5" placeholder="Your text"></textarea>
            <br />
            <button onClick={submitTodoHandler} className="new-task-btn">Add</button>
        </form>
        );
}

export default NewTodo;