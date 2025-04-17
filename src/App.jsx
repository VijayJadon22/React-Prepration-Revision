import { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("User");
  return (
    <>
      <Greet name={text} />
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Count++</button>
      <button onClick={() => setText("Vijay")}>Change Name</button>
    </>
  );
}

export default App;
