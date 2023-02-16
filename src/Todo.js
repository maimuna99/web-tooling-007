import React from "react";

export default function Todo({ todo }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} readOnly />
        {todo.name}
      </label>
    </div>
  );
}
