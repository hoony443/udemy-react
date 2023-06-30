import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateField":
      return { ...state, [action.field]: action.value };
    case "reset":
      return initialState;
    default:
      throw new Error("Unhandled action");
  }
};

export default function InputReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "updateField", field: name, value });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={handleReset}>Reset</button>
      <p>Entered Name: {state.name}</p>
      <p>Entered Email: {state.email}</p>
    </div>
  );
}
