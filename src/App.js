import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState('');

  const convertNumberToWord = () => {

    let oneToTwenty = [
      "",
      "one ",
      "two ",
      "three ",
      "four ",
      "five ",
      "six ",
      "seven ",
      "eight ",
      "nine ",
      "ten ",
      "eleven ",
      "twelve ",
      "thirteen ",
      "fourteen ",
      "fifteen ",
      "sixteen ",
      "seventeen ",
      "eighteen ",
      "nineteen ",
    ];
    let tenth = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    if (number.toString().length > 7) return (setNumber("overlimit"));
    console.log(number);
    let num = ("0000000" +number)
      .slice(-7)
      .match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    if (!num) return setNumber('not a number');

    let outputText =
      num[1] != 0
        ? (oneToTwenty[Number(num[1])] ||
            `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + " million "
        : "";

    outputText +=
      num[2] != 0
        ? (oneToTwenty[Number(num[2])] ||
            `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + "hundred "
        : "";
    outputText +=
      num[3] != 0
        ? (oneToTwenty[Number(num[3])] ||
            `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + " thousand "
        : "";
    outputText +=
      num[4] != 0
        ? (oneToTwenty[Number(num[4])] ||
            `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + "hundred "
        : "";
    outputText +=
      num[5] != 0
        ? oneToTwenty[Number(num[5])] ||
          `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `
        : "";
    setNumber(outputText);
  };
  return (
    <div className="App">
      <input
        type="text"
        id="numberInput"
        placeholder="Enter number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={convertNumberToWord}>Convert Number to words</button>
      <p data-testid="word-id">Number in words: {number}</p>
    </div>
  );
}

export default App;
