import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import {useState} from 'react'
function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }
  return (
    <div className="App">
      <h1>To-List Forms</h1>
      <main>
        <ToDoForm addTodo={addTodo} />
        <ToDoList todos={todos} />

      </main>
    </div>
  );
}

export default App;
