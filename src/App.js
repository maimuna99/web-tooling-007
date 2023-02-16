import React, { useState } from "react";
import Example from "./Requires2";
import Todolist from "./Todolist";

function App() {
  const [todos] = useState(["todo1", "todo2"]);
  return (
    <>
      <Todolist todos={todos} />
      <input type="text" />
      <button>Add to do</button>
      <button>clear completed</button>
      <div>0 left to do </div>
      <Example />
    </>
  );
}

export default App;
