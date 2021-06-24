import React, { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todoList: [
          ...state.todoList,
          { todo: action.payload, completed: false },
        ],
      };
    case "strike":
      return {
        todoList: state.todoList.map((t, id) =>
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
            onClick={() => dispatch({ type: "strike", payload: id })}
            style={{ textDecoration: t.completed ? "line-through" : "" }}
          >
            {t.todo}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
