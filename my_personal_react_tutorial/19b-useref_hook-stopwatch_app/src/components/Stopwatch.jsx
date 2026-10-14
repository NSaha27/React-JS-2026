import {useState, useRef} from "react";

function Stopwatch(){
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStartBtnClick = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    const intervalID = setInterval(() => {
      setNow(Date.now());
    }, 10);

    intervalRef.current = intervalID;
  };
  const handleStopBtnClick = () => {
    const intervalID = intervalRef.current;
    clearInterval(intervalID);
  };


  let secondPassed = 0;
  if(startTime !== null && now !== null){
    secondPassed = (now - startTime) / 1000;
  }

  return (
    <div className="">
      <h2 className="watch">Time Passed: {secondPassed.toFixed(3)}</h2>
      <div className="">
        <button className="btn btn-success" onClick={handleStartBtnClick}>
          Start
        </button>
        <button className="btn btn-danger" onClick={handleStopBtnClick}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;