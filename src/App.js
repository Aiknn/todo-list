import './App.css';
import React, {useEffect, useState} from "react";
import NewTodo from './components/NewTodo';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import TodoSwitcher from './components/TodoSwitcher';
import Header from './components/Header';

function App() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('uncompleted');
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    switch(filterStatus){
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.status === 'uncompleted'));
        break;
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.status === 'completed'));
        break;
      default:
        setFilteredTodos(todos.filter(todo => todo.status === 'deleted'));
        break;
    }
  }, [todos, filterStatus]);
  return (
    <div className="App container">
        <Header />
        <NewTodo newTask={newTask} setNewTask={setNewTask} todos={todos} setTodos={setTodos}/>
        <TodoSwitcher filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
        <TodoList todos={todos}/>
        <Footer />
    </div>
  );
}

export default App;
