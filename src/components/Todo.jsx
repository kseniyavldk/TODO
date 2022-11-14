import React from "react";
import { RiDeleteBin6Line, RiEditBoxLine } from "react-icons/ri";
import "../App.css";
import TodoForm from "./TodoForm";

const Todo = ({
  todo,
  removeTodo,
  completeTodo,
  updateTodo,
  editTodo,
  editTodoId,
}) => {
  return (
    <div className="todo-container">
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => completeTodo(todo.id)}
      />

      {todo.id === editTodoId ? (
        <TodoForm
          id="todo-edit"
          type="text"
          btnText="Update"
          Value={editTodo}
        />
      ) : (
        <div className="todo-text-btn">
          <p className={`todo-text ${todo.isCompleted ? "completed" : ""}`}>
            {todo.todoText}
          </p>
          <div className="todo-btn">
            <button className="btn-group" onClick={() => removeTodo(todo.id)}>
              <RiDeleteBin6Line className="icon" />
            </button>
            <button
              className="btn-group"
              onClick={() => updateTodo(todo.id)}
            >
              <RiEditBoxLine className="icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
