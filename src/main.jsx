import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App2 from "./App2.jsx";
import { BrowserRouter } from "react-router-dom";
import App3 from "./App3.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <App /> */}
        {/* <App2 /> */}
        <App3 />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
