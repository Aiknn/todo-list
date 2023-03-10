import React from "react";
import { useState } from "react";

const Todo = (props) => {
    const [isActive, setActive] = useState(true);
    const isDeleted = props.obj.status === 'deleted';
    const isCompleted = props.obj.status === 'completed';
    const showDeleteTab = () => {
        setActive(!isActive);
    };
    const onChangeHandler = (e) => {
        if(e.target.checked) {
            props.updateTodo(props.obj.id, 'makeDone');    
        } 
        else{
            props.updateTodo(props.obj.id, 'makeUndone');
        }
    }
    const deleteItemHandler = () => {
        props.updateTodo(props.obj.id, 'makeDelete');
        setActive(false);
    }
    const returnToTodoHandler = () => {
        props.updateTodo(props.obj.id, 'makeUndone');
    }
    const deleteForever = () => {
        props.deleteForeverHandler(props.obj.id);
        setActive(false);
    }
    return(
        <li>
            <div className="todo-item">
                <button className="vert-dots-btn"><span className="vert-dots" onClick={showDeleteTab}>&#8942;</span></button>
                <input type="checkbox" checked={isCompleted} onChange={onChangeHandler} disabled={isDeleted}/>
                <span className={`${isCompleted ? "crossed" : ""}`}>{props.obj.text}</span>
            </div>
            <div className={isActive ? 'hidden-no-place' : null}>
                <div className="delete-modal">
                    {isDeleted ? 
                        <div>
                            <button className="trash-btn" onClick={deleteForever}>
                                <i className="fas fa-trash space"></i>
                                Delete Forever
                            </button> 
                            <button className="trash-btn" onClick={returnToTodoHandler}>
                                <i className="fas fa-check space"></i>
                                Move Back to To Do
                            </button>
                        </div>
                        :
                        <button className="trash-btn" onClick={deleteItemHandler}>
                            <i className="fas fa-trash space"></i>
                            Move to Trash
                        </button>
                    } 
                    
                </div>
            </div>
        </li> 
    )
};

export default Todo;