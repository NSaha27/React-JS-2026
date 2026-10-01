import { useEffect, useState } from "react";

function EffectWithCleanupFunction() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, height]);

  return (
    <div className="">
      <h2 className="">
        The current size of the window is {width} &times; {height} px
      </h2>
    </div>
  );
}

export default EffectWithCleanupFunction;
