import React from "react";
import Todo from "./Todo";

export default function Todolist({ todos }) {
  return (
    <>
      {/* {todos.length} */}
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} />
      ))}
    </>
  );
}
