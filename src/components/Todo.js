import React from "react";

const Todo = (props) => {
    
    const onChangeHandler = (e) => {
        if(e.target.checked) {
            props.updateTodo(props.obj.id, 'makeDone');    
        } 
        else{
            props.updateTodo(props.obj.id, 'makeUndone');
        }
    }

    return(
        <li className="todo-item">
            <button className="vert-dots-btn"><span className="vert-dots">&#8942;</span></button>

            <input type="checkbox" checked={props.obj.status==="completed"} onChange={onChangeHandler}/>
            
            <span className={`${props.obj.status==="completed" ? "crossed" : ""}`}>{props.obj.text}</span>
        </li>
            
    )
};

export default Todo;