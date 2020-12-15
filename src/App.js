import React from "react";
import "./styles.css";

function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      <h1>This is a counter</h1>
      <div className="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
