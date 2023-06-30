import React, { useReducer } from "react";

const initialState = {
  todos: [],
  newTodo: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        newTodo: "",
      };
    case "updateNewTodo":
      return { ...state, newTodo: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unhandled action");
  }
};

const TodoListReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({ type: "updateNewTodo", payload: e.target.value });
  };

  const handleAddTodo = () => {
    if (state.newTodo.trim() !== "") {
      dispatch({ type: "addTodo", payload: state.newTodo });
    }
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <input type="text" value={state.newTodo} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TodoListReducer;
