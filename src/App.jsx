import { useState } from 'react';
import "./App.css";
import Counter from "./components/Counter";
import ExponentFive from "./components/ExponentFive";
import ExponentFour from "./components/ExponentFour";
import ExponentSix from "./components/ExponentSix";
import ExponentThree from "./components/ExponentThree";
import ExponentTwo from "./components/ExponentTwo";

function App() {
  const [count, setCount] = useState(0);
  // const [activeIndex, setActiveIndex] = useState(0);
  const handleIncrement = () => setCount((prevCount) => prevCount + 1)
  const handleDecrement = () => setCount((prevCount) => prevCount - 1)
  const result = count;

  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      <Counter count={result} decrement={handleDecrement} increment={handleIncrement} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo count={result} />
        <ExponentThree count={result} />
        <ExponentFour count={result} />
        <ExponentFive count={result} />
        <ExponentSix count={result} />
      </div>
    </div>
  );
}

export default App;
