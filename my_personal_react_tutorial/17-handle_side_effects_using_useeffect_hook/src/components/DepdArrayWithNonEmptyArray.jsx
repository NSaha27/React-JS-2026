import { useEffect, useState } from "react";

function DepdArrayWithNonEmptyArray() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`The counter has changed, current value is ${counter}`);
  }, [counter]);

  const handleDecreaseCounter = () => {
    setCounter((prevCount) => {
      if (prevCount >= 1) {
        prevCount -= 1;
      }
      return prevCount;
    });
  };
  const handleIncreaseCounter = () => {
    setCounter((prevCount) => (prevCount += 1));
  };

  return (
    <div>
      <h1>Use of a dependency array with variables inside</h1>
      <p>
        <button type="button" onClick={handleDecreaseCounter}>
          -
        </button>
        <input type="text" name="" id="" value={counter} readOnly={true} />
        <button type="button" onClick={handleIncreaseCounter}>
          +
        </button>
      </p>
    </div>
  );
}

export default DepdArrayWithNonEmptyArray;
