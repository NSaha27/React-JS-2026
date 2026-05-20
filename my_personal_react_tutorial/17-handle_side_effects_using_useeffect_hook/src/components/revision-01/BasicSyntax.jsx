import { useEffect, useState } from "react";

export default function BasicSyntax() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("click no.", count);
  }, [count]);

  const handleBtnClick = () => {
    setCount((curVal) => curVal + 1);
  };
  return (
    <div className="">
      <h1 className="">You clicked me {count} times</h1>
      <button className="" onClick={handleBtnClick}>
        click me
      </button>
    </div>
  );
}
