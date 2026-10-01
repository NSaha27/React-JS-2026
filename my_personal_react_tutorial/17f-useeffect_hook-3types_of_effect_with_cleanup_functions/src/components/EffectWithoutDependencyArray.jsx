import { useEffect, useState } from "react";

function EffectWithoutDependencyArray() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effect initialized and running...");
  });

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
      <h1 className="">Effect without a dependency array</h1>
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

export default EffectWithoutDependencyArray;
