import { styled } from "styled-components";
import { useState } from "react";

const CalcDiv = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: row;
  margin: 1vh auto;
  background-color: rgb(210, 210, 210);
  justify-content: space-between;
  padding: 2vh 2vw;
  border: 0.2vw dashed black;
  border-radius: 1vw;
  font-family: monospace;

  input {
    border-radius: 0.4vw;
  }
  #number-container {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  #number-container * {
    margin: 1vh 0;
  }
  #calculator-output {
    overflow: hidden;
  }
  #button-container {
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  button {
    width: 40%;
    height: 25%;
    border-radius: 1vw;
    font-size: calc(1px + 1vw);
    transition: background-color 0.1s ease-in-out;
  }
  button:hover {
    background-color: rgb(255, 179, 143);
  }
  label,
  input {
    font-size: calc(1px + 1.2vw);
  }

  .negative {
    color: red;
  }
`;

export default function Calc() {
  const [firstNumber, setFirstNumber] = useState<string>("");
  const [secondNumber, setSecondNumber] = useState<string>("");
  const [result, setResult] = useState<number | string>("");

  function calculate(operation: string) {
    const first = Number(firstNumber);
    const second = Number(secondNumber);
    let res: number | string = 0;

    if (operation === "add") {
      res = first + second;
    } else if (operation === "subtract") {
      res = first - second;
    } else if (operation === "multiply") {
      res = first * second;
    } else if (operation === "divide") {
      res = second !== 0 ? first / second : "Error";
    } else if (operation === "power") {
      let result = 1;
      for (let i = 0; i < Math.abs(second); i++) {
        result *= first;
      }
      res = second < 0 ? 1 / result : result;
    }

    setResult(res);
  }

  function clearCalc() {
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
  }

  return (
    <CalcDiv>
      <div id="number-container">
        <label htmlFor="first-number">First Number:</label>
        <input
          type="text"
          id="first-number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />

        <label htmlFor="second-number">Second Number:</label>
        <input
          type="text"
          id="second-number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
        <p>Result:</p>
        <p
          id="calculator-output"
          className={Number(result) < 0 ? "negative" : ""}
        >
          {result}
        </p>
      </div>

      <div id="button-container">
        <button onClick={() => calculate("add")}>+</button>
        <button onClick={() => calculate("subtract")}>-</button>
        <button onClick={() => calculate("multiply")}>*</button>
        <button onClick={() => calculate("divide")}>/</button>
        <button onClick={() => calculate("power")}>**</button>
        <button onClick={clearCalc}>Clear</button>
      </div>
    </CalcDiv>
  );
}
