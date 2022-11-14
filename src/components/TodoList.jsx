import React from "react";
import { MdOutlineDoneOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import "../App.css";

const TodoList = ({ todos, setTodos, setEditTodo }) => {

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed};
        }
        return item;
      })
    );
  };

  const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault}
          />
          <div className='todo-btn'>
            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
              <MdOutlineDoneOutline className="icon" />
            </button>
            <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
              <FiEdit2 className="icon" />
            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
              <AiFillDelete className="icon" />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

/* const TodoList = ({ todos, removeTodo, completeTodo, updateTodo, editTodo, editTodoId }) => {
  const renderTodos = () => {
    if (todos.length > 0) {
      return todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            updateTodo={updateTodo}
            editTodo={editTodo}
            editTodoId={editTodoId}
          />
        );
      });
    }
    return <p className="errMessage">There are no Todos!</p>;
  };
  return <div className="todoList-container">{renderTodos()}</div>;
}; */

export default TodoList;
