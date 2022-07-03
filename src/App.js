import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState([]);

  const renderList = () => {
    let num = [];
    for (let i = 0; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        num.push("FizzBuss");
      } else if (i % 3 === 0) {
        num.push("Fizz");
      } else if (i % 5 === 0) {
        num.push("Buss");
      } else {
        num.push(i);
      }
    }
    setNumber(num);
  };

  return (
    <div className="App">
      <button onClick={renderList}>Render</button>
      <div id="fizz-buss">
        {
          <ul data-testid="fizz-buss">
            {number.map((list, i) => {
              return <li key={i}>{list}</li>;
            })}
          </ul>
        }
      </div>
    </div>
  );
}

export default App;
