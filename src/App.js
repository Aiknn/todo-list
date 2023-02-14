import './App.css';
import React, {useEffect, useState} from "react";
import NewTodo from './components/NewTodo';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import TodoSwitcher from './components/TodoSwitcher';
import Header from './components/Header';

function App() {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('uncompleted');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const newTodoHandler = (todo) => {
    setTodos(prevState=>([...prevState, todo]));
  }
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
        <NewTodo onSubmit={newTodoHandler}/>
        <TodoSwitcher filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
        <TodoList todos={todos} filteredTodos={filteredTodos}/>
        <Footer />
    </div>
  );
}

export default App;
