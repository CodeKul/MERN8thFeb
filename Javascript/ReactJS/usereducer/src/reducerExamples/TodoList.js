import React, { useReducer, useState } from "react";
import './Todo.css'
function todoReducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todoList: [...state.todoList,
         action.payload],
        completed: false,
        
      };
    case "strike":
      return {
        todoList:state.todoList.map((t, id) =>
          id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };
    default:
      return state;
  }
}
function TodoList() {
  const [todoItem, setTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, {
    todoList: [],
    completed: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add-todo", payload: todoItem });
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
      <div>
        {state.todoList.map((t, id) => (
            
          <p
            key={id}
            onClick={() => dispatch({ type: "strike", payload: t.id })}
            style={{textDecoration:t.completed?"line-through":""}}
          >
            {t}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
