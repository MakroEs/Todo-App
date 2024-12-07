import { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit, FaCheck } from "react-icons/fa";
import PropTypes from "prop-types";

import "../App.css";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  if (!todo) {
    return null;
  }

  const { content, id } = todo;

  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const updateTodo = () => {
    if (newTodo.trim() === "") {
      alert("Todo içeriği boş olamaz!");
      return;
    }

    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  };

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <div>
        {editable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            style={{
              width: "380px",
            }}
            className="todo-input"
            type="text"
          />
        ) : (
          content || "Boş bir görev"
        )}
      </div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
        {editable ? (
          <FaCheck className="todo-icons" onClick={updateTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
};

export default Todo;
