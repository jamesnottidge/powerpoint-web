import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { StateProvider } from "./StateContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>An App</p>
    </div>
  );
}

export default App;
