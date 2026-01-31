import { useState } from "react";
import "./css/counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((c) => c + 1);
  };

  return (
    <div className="counter-container">
      <h2 className="counter-heading">
        Counter (state management using onClick event)
      </h2>
      <div className="counter-body">
        <button className="counter-btn" onClick={handleClick}>
          you have clicked me {counter} times
        </button>
      </div>
    </div>
  );
}

export default Counter;
