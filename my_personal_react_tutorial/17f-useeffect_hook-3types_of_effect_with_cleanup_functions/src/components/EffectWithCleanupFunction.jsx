import { useEffect, useState } from "react";

function EffectWithCleanupFunction() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Effect is running...");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
      <h1 className="">Effect with cleanup function</h1>
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

export default EffectWithCleanupFunction;
