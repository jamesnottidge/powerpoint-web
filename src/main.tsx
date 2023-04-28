import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateProvider } from "./StateContext";
import "./index.css";

import { slideReducer } from "./controllers/slideReducer";
import { presentationReducer } from "./controllers/presentationReducer";
import { combineReducers } from "./utils";

const reducer = combineReducers(presentationReducer, slideReducer);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StateProvider reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
