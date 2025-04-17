import "./App.css";
import { useState } from "react";

function Counter() {
  // let zahl = 15
  const [zahl, setZahl] = useState(0);
  const [colour, setColour] = useState("red");

  function reset() {
    setZahl(0);
  }

  return (
    <>
      <p>Meine Lieblingszahl ist {zahl}</p>

      <button onClick={() => setZahl(zahl + 1)}>+</button>
      <button onClick={() => setZahl(zahl - 1)}>-</button>
      <button onClick={reset}>Reset</button>
      <br></br>
      <br></br>
      <br></br>
      <h1 style={{ color: colour }}>Ich bin eine Überschrift</h1>
      <button onClick={() => setColour("green")}>
        Ändere die Farbe zu grün
      </button>
      <button onClick={() => setColour("yellow")}>
        Ändere die Farbe zu gelb
      </button>
    </>
  );
}

export default Counter;
