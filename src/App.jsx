import { useState } from "react";

export function App() {
  const [text, setText] = useState("");
  
  function handleSubmit() {
    // e.preventDefault();

    fetch("/text", {
      method: "POST",
      headers: {"Content-Type": "application/JSON"},
      body: JSON.stringify({text: text})
    })
  }

  return (
      <form action="/text" method="post">
        <input type="text" name="text" onChange={e => setText(e.target.value)}/>
        <input onClick={handleSubmit} type="submit" value="Submit"/>
        <p>{text}</p>
      </form>
  );
}
