import './App.css';
import { useState } from "react"

function App() {
  // function-based component
  const [userInput, setUserInput] = useState("");
  const [isRed, setIsRed] = useState(false);

  // function inputHandler(e) {
  // get the new value of input element
  // const newInput = e.target.value;
  // update userInput state
  // setUserInput(e.target.value);
  // }

  return (
    <div className="App">
      <h1>React state</h1>
      <h2 className={isRed ? "is-red" : ""}>Show input value: {userInput}</h2>
      <h2>Show isRed: {`${isRed}`}</h2>
      <input type="text" onInput={e => setUserInput(e.target.value)} />
      <p>Check to highlight:
        <input type="checkbox" onChange={e => setIsRed(e.target.checked)} />
      </p>
    </div>
  );
}

export default App;
