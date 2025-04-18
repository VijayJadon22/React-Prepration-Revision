import React, { useState, Suspense } from "react";
import "./App.css";
import Greet from "./components/Greet";
import { PureExample } from "./components/PureExample";
// import LazyImageLoader from "./components/ImageLazyLoader.jsx";
const LazyImageLoader = React.lazy(() =>
  import("./components/ImageLazyLoader")
);
import DataComponent from "./components/DataComponent";
import withLoading from "./utils/withLoading";

const EnhancedComponent = withLoading(DataComponent);

function App() {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("User");
  // const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      {/* use of React.memo */}
      {/* <Greet name={text} /> */}

      {/* <PureExample name={text} /> */}

      {/* <p>Count: {count}</p> */}
      {/* <button onClick={() => setCount((count) => count + 1)}>Count++</button>
      <button onClick={() => setText("Vijay")}>Change Name</button> */}
      {/* <button onClick={() => setShow((show) => !show)}>Load</button>
      <Suspense fallback={<div>Loading..</div>}>
        {show && <LazyImageLoader />}
      </Suspense> */}
      <button onClick={() => setLoading((loading) => !loading)}>
        ShowLoading
      </button>
      <EnhancedComponent loading={loading}/>
    </>
  );
}

export default App;
