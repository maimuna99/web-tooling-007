import React from "react";
import Todo from "./Todo";

export default function Todolist({ todos }) {
  return todos.map((todo) => {
    return (
      <>
        {todos.length}
        {todos.map((todo,i) => {
          return <Todo key=i todos={todo} />;
        })}
        {/* <Todo key="1" todos={todo} /> */}
      </>
    );
  });
}
