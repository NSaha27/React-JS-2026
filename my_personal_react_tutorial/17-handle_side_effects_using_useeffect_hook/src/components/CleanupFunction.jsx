import { useEffect, useState } from "react";

function CleanupFunction() {
  const [seconds, setSeconds] = useState(100);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSec) => {
        if (prevSec >= 1) {
          prevSec -= 1;
        }
        return prevSec;
      });
    }, 1000);

    return () => {
      clearInterval(timer); // cleanup function
      console.log("timer cleared!");
    };
  }, []);

  return <h2>we're ready to launch the rocket in {seconds} seconds</h2>;
}

export default CleanupFunction;
