// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import State from "./Components/State";

function App() {
  const [state, setState] = React.useState(false);
  return (
    <div className="App">
      <button onClick={() => setState((prev) => !prev)}>
        {state ? "Backward" : "Forward"}
      </button>
      <State direction={state ? "Backward" : "Forward"} />
    </div>
  );
}

export default App;
