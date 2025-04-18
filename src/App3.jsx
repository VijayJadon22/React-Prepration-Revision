import React from "react";
import Counter from "./components/Counter";
import { useDispatch } from "react-redux";

const App3 = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <Counter />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default App3;
