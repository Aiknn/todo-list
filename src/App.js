import './App.css';
import NewTodo from './components/NewTodo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App container">
        <h1>Simple To Do List</h1>
        <p>Today is awesome day. The weather is awesome, you are awesome too!</p>
        <NewTodo />
        <Footer />
    </div>
  );
}

export default App;
