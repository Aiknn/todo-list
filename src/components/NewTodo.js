import React from "react";

const NewTodo = () => {
    return(
        <form className="new-task">
            <p className="new-task-desc"><label htmlFor="new-task">Add New To Do</label></p>
            <textarea name="Text1" cols="22" rows="5" placeholder="Your text"></textarea>
            <br />
            <button className="new-task-btn">Add</button>
        </form>
        );
}

export default NewTodo;