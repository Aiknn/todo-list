import React from "react";

const TodoSwitcher = (props) => {
    return (
        <div>
            <button 
                onClick={() => props.setFilterStatus('uncompleted')} 
                className={`switcher-btn ${props.filterStatus === 'uncompleted' ? "active" : ""}`}>
                To Do
            </button>
            <button 
                onClick={() => props.setFilterStatus('completed')} 
                className={`switcher-btn ${props.filterStatus === 'completed' ? "active" : ""}`}>
                Done
            </button>
            <button 
                onClick={() => props.setFilterStatus('deleted')} 
                className={`switcher-btn ${props.filterStatus === 'deleted' ? "active" : ""}`}>
                Trash
            </button>
        </div>
    )
};

export default TodoSwitcher;