import React, {useEffect} from "react";
import { v4 as uuid4 } from "uuid";
/* import { RiSaveLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa"; */
import "../App.css";

const TodoForm = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = ( title, id, completed) => {
    const newTodo = todos.map((todo) => 
    todo.id === id ? { title, id, completed }: todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if(editTodo){
      setInput(editTodo.title);
    } else {
        setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuid4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Todo:"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? "Save" : "Add"}
      </button>
    </form>
  );
};

/* const TodoForm = ( {id, type, btnText, value, onSubmit, onChange}) => {
  return (
    <form id={`${id}-form`} onSubmit = {(e) => onSubmit(e)}>
        <div>
            <input
                id={`${id}-input`}
                type={type}
                value={value}
                onChange={(e) => onChange(e)}
                required             
            />
            <span className='highlight'></span>
            <span className='bar'></span>
            <label className='todoForm-label' htmlFor={id}>
                {id === "todo-add" ? "Todo:" : ""}
            </label>
        </div>
        <button  id={`${id}-btn`} className='form-submit-btn' type='submit'>
            {btnText === "Add" ? (
                 <FaPlus className='btn-icon-add'/>
            ) : (
                <RiSaveLine className='btn-icon-save'/>
            )}
            
        </button>

    </form>
  )
} */

export default TodoForm;
