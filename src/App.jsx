import { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import { PureExample } from "./components/PureExample";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("User");
  return (
    <>
      {/* use of React.memo */}
      {/* <Greet name={text} />  */}

      <PureExample name={text} />

      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Count++</button>
      <button onClick={() => setText("Vijay")}>Change Name</button>
    </>
  );
}

export default App;
