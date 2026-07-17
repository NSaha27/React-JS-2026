import { useState } from "react";

import UseMemo from "./UseMemo";

function ParentReRender() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <UseMemo />
      <button className="" onClick={() => setCount((prev) => prev + 1)}>
        Re-render Parent
      </button>
      <div className="">
        <h2 className="">Parent component re-rendered {count} times!</h2>
      </div>
    </div>
  );
}

export default ParentReRender;
