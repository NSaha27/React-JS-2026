import { useEffect, useState } from "react";

function EffectWithDependencyArray() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effect initialized and running on each count change...");
  }, [count]);

  const handleDecrement = () => {
    setCount((cur) => {
      if (cur > 0) {
        return cur - 1;
      } else {
        return 0;
      }
    });
  };
  const handleIncrement = () => {
    setCount((cur) => cur + 1);
  };

  return (
    <div className="">
      <h1 className="">Effect with a dependency array</h1>
      <div className="">
        <h3 className="">Counter Application</h3>
        <div className="">
          <button className="decrease" onClick={handleDecrement}>
            -
          </button>
          <input
            type="text"
            name="count"
            id="count"
            className=""
            value={count}
            readOnly
          />
          <button className="increase" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default EffectWithDependencyArray;
