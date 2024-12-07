import PropTypes from "prop-types";
import { useState } from "react";
import "../App.css";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearInput = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 99999999999),
      content: newTodo,
    };
    onCreateTodo(request);
    clearInput();
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Todo giriniz"
      />
      <button onClick={createTodo} className="todo-create-button">
        Todo Oluştur
      </button>
    </div>
  );
}

// Prop türü doğrulaması ekleyin
TodoCreate.propTypes = {
  onCreateTodo: PropTypes.func.isRequired,
};

export default TodoCreate;
