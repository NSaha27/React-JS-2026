import { useEffect, useState } from "react";
import styles from "./css/Timer.module.css";

export default function Timer() {
  const [timer, setTimer] = useState(new Date());

  const handleTimer = () => {
    const newTimer = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => {
      clearInterval(newTimer);
    };
  };
  useEffect(handleTimer, []);

  return (
    <div className={styles["container"]}>
      <h1 className={styles["project-title"]}>Timer</h1>
      <span className={styles["timer"]}>
        {timer.toLocaleDateString()} {timer.toLocaleTimeString()}
      </span>
    </div>
  );
}
