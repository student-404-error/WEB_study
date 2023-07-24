import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import TodoList from "./components/TodoList";
import Newtodo from "./components/NewTodo";

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);
  return (
    <div className="App">
      <Newtodo />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
