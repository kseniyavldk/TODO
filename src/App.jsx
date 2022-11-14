import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";
import "./App.css";

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div><Header/></div>
        <div>
          <TodoForm
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

/* function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);


  const updateTodo = (title, id, completed) =>{
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if(editTodo){
      setTodo(editTodo.title);
    } else {
      setTodo("");
    }
  }, [setTodo, editTodo ])

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const newTodo = {
      id: uuid4(),
      todoText: todo,
      isCompleted: false,
    };
    if(!editTodo){
      setTodos([...todos, newTodo]);
      setTodo("");
    }
    else { 
      updateTodo(todo, editTodo.id, editTodo.completed);
    }
   
    
  };

  const removeTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if(todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };


  return (
    <div className="app-container">
      <TodoForm
        id="todo-add"
        type="text"
        btnText="Add"
        value={todo}
        onChange={handleInputChange}
        onSubmit={handleInputSubmit}
      />
      <TodoList
        input={input}
        todos={todos}
        editTodo={editTodo}
        editTodoId={editTodoId}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
} */

export default App;
