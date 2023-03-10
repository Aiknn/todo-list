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
    setFilterStatus('uncompleted');
  }
  const updateTodoHandler = (id, target) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        if(target === 'makeDone'){
          return {...todo, status: 'completed'};
        }
        else if(target === 'makeUndone'){
          return {...todo, status: 'uncompleted'};
        }
        else {
          return {...todo, status: 'deleted'};
        }
      } 
      else {
        return todo;
      }
    }));
  }
  const deleteForeverHandler = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

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
        <NewTodo newTodoHandler={newTodoHandler}/>
        <TodoSwitcher filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
        <TodoList filteredTodos={filteredTodos} filterStatus={filterStatus} updateTodo={updateTodoHandler} deleteForeverHandler={deleteForeverHandler}/>
        <Footer />
    </div>
  );
}

export default App;
