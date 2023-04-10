import React, { useState } from "react";
import "./styles.css";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleSum = () => {
    setResult(num1 + num2);
  };

  return (
    <div className="container">
      <h1>Simple Sum Calculator</h1>
      <div className="input-container">
        <label>Number 1:</label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(parseInt(e.target.value))}
        />
      </div>
      <div className="input-container">
        <label>Number 2:</label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(parseInt(e.target.value))}
        />
      </div>
      <button className="calc-button" onClick={handleSum}>
        Calculate Sum
      </button>
      <div className="result-container">
        <label>Result:</label>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default App;
