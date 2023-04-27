import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateProvider } from "./StateContext";
import "./index.css";

import { slideReducer } from "./controllers/slideReducer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StateProvider reducer={slideReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
