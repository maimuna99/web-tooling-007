import React, { useState, useRef } from "react";
import Example from "./Requires2";
import Todolist from "./Todolist";

function App() {
  const todoNameRef = useRef();
  const todoDesRef = useRef();
  const todoEmojiRef = useRef();
  const [todos, setTodos] = useState([
    { id: 1, name: "todo1", description: "desc", emoji: "🧘🏻‍♂️", complete: true },
  ]);

  function handleAddToDo() {
    const name = todoNameRef.current.value;
    const description = todoDesRef.current.value;
    const emoji = todoEmojiRef.current.value;
    if (name === "") return;
    console.log(name);
    // todoNameRef.current.value = todos;
    setTodos(() => {
      return todos.concat([
        {
          id: 1,
          name: name,
          description: description,
          emoji: emoji,
          complete: false,
        },
      ]);
    });
    todoNameRef.current.value = null;
    todoDesRef.current.value = null;
    todoEmojiRef.current.value = null;
    console.log(todos, "todos");
  }

  return (
    <>
      <Todolist todos={todos} />
      <input ref={todoNameRef} id="name" type="text" />
      <br />
      <input ref={todoDesRef} id="describtion" type="text" />
      <br />
      <input ref={todoEmojiRef} id="emoji" type="text" />
      <button onClick={handleAddToDo}>Add to do</button>
      <button>clear completed</button>
      <div>0 left to do </div>
      <Example />
    </>
  );
}

export default App;
