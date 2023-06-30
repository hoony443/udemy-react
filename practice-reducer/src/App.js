import { Routes, Route } from "react-router-dom";
import InputReducer from "./page/InputReducer";
import TodoListReducer from "./page/TodoListReducer";
import LoginReducer from "./page/LoginReducer";

function App() {
  return (
    <Routes>
      <Route path="first" element={<InputReducer />} />
      <Route path="second" element={<TodoListReducer />} />
      <Route path="third" element={<LoginReducer />} />
    </Routes>
  );
}

export default App;
