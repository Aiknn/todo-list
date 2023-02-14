import React, { useState } from "react";

const NewTodo = (props) => {
    const [data, setData] = useState("");

    const newTodoHandler = (e) => {
        setData(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        props.onSubmit({
            text: data, status: 'uncompleted', id: Math.floor(Math.random() * Date.now())
        });
        setData("");
    };
    return(
        <form className="new-task">
            <p className="new-task-desc"><label htmlFor="new-task">Add New To Do</label></p>
            <textarea onChange={newTodoHandler} value={data} name="Text1" cols="22" rows="5" placeholder="Your text"></textarea>
            <br />
            <button onClick={submitTodoHandler} className="new-task-btn">Add</button>
        </form>
        );
}

export default NewTodo;