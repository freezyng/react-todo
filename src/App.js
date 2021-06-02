import './App.css';
import TodoInput from './components/todoInput.jsx';
import TodoList from './components/todoList.jsx';

function App() {
  return (
    <div className="App">
      <h2>TODO REACT</h2>
      
      <TodoInput />
      <TodoList />

    </div>
  );
}

export default App;
