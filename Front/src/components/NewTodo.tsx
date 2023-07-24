import React, { useRef } from "react";

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todosubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={todosubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default NewTodo;
