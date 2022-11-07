import React, { useState, useEffect, useRef } from "react";
import {CiTextAlignLeft} from "react-icons/ci";


function TodoForm(props) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value);
  }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="task-input">
        <CiTextAlignLeft 
          className="text-icon"/>
        <input
        type="text"
        className="todo-input"
        placeholder="Add a todo"
        value={input}
        name="text"
        onChange={handleChange}
        ref={inputRef}
      />
      </div>
      
      <div className="controls">
        <div className="filters">
          <span className="all">All</span>
          <span className="pending">Pending</span>
          <span className="completed">Completed</span>
        </div>

        <button className="todo-button">Add a todo</button>
      </div>

      <div className="tasks"></div>
    </form>
  );
}

export default TodoForm;
