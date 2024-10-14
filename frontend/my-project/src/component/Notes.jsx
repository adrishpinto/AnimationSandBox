import React from "react";
import { useState } from "react";

function Notes() {
  const [x, setX] = useState(5);
  let click = () => {
    setX((item) => item + 1);
  };
  return (
    <div>
      <h1 className="text-5xl text-center mt-10">{x}</h1>
      <button onClick={click}>Click me!</button>
    </div>
  );
}

export default Notes;
