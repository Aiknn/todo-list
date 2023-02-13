import './App.css';
import React, {useState} from "react";
import NewTodo from './components/NewTodo';
import Footer from './components/Footer';
import TodoList from './components/TodoList';

function App() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App container">
        <h1>Simple To Do List</h1>
        <p>Today is awesome day. The weather is awesome, you are awesome too!</p>
        <NewTodo newTask={newTask} setNewTask={setNewTask} todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos}/>
        <Footer />
    </div>
  );
}

export default App;
