import { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    if (!newTodo.content.trim()) {
      alert("Görev içeriği boş olamaz!");
      return;
    }
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === newTodo.id ? newTodo : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="main">
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList
          todos={todos}
          onRemoveTodo={removeTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
