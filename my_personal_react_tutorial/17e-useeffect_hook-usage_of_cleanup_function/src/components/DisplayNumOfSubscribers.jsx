import { useState, useEffect } from "react";

export default function DisplayNumOfSubscribers() {
  const [numOfSubscribers, setNumOfSubscribers] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNumOfSubscribers(prev => {
        if (prev < 10000) {
          prev += 1
          return prev;
        } else {
          return prev;
        }
      });
    }, 5);
    return () => {
      clearInterval(timer);
    }
  }, []);

  return <div className="">
    <h5>our channel reached to</h5>
    <h1>{numOfSubscribers}</h1>
    <h3>subscribers</h3>
  </div>
}