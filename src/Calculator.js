import React, { useState } from "react";

const Calculator = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [result, setResult] = useState(0);

  const handleCalculator = (operator) => {
    switch (operator) {
      case "add":
        setResult(first + second);
        break;
      case "subtract":
        setResult(first - second);
        break;
      case "multiply":
        setResult(first * second);
        break;
      case "division":
        setResult(first / second);
        break;
      case "modulo":
        setResult(first % second);
        break;

      default:
        break;
    }
  };
  return (
    <div className="calc">
      <label htmlFor="">Enter first number:</label>
      <input
        type="number"
        name="operator1"
        value={first}
        onChange={(e) => setFirst(parseFloat(e.target.value))}
      />
      <br />
      <label htmlFor="">Enter second number:</label>
      <input
        type="number"
        name="operator2"
        value={second}
        onChange={(e) => setSecond(parseFloat(e.target.value))}
      />
      <br />
      <button onClick={() => handleCalculator("add")}>+</button>
      <button onClick={() => handleCalculator("subtract")}>-</button>
      <button onClick={() => handleCalculator("multiply")}>x</button>
      <button onClick={() => handleCalculator("division")}>/</button>
      <button onClick={() => handleCalculator("modulo")}>%</button>

      <h1>result: {result}</h1>
    </div>
  );
};

export default Calculator;
