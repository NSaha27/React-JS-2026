import { useEffect, useState } from "react";

export default function DisplayNumber() {
  const [numOfSubscriber, setNumOfSubscriber] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNumOfSubscriber((curVal) => curVal + 1);
    }, 80);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h1 className="">{numOfSubscriber}</h1>;
}
