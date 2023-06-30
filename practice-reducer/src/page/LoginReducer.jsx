import React, { useReducer } from "react";

const initialState = {
  isLoggedIn: false,
  username: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { isLoggedIn: true, username: action.payload };
    case "logout":
      return { isLoggedIn: false, username: "" };
    default:
      throw new Error("Unhandled action");
  }
};

const LoginReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = () => {
    dispatch({ type: "login", payload: "사용자" });
  };

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div>
      {state.isLoggedIn ? (
        <div>
          <p>안녕하세요, {state.username}님!</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div>
          <p>로그인이 필요합니다.</p>
          <button onClick={handleLogin}>로그인</button>
        </div>
      )}
    </div>
  );
};

export default LoginReducer;
