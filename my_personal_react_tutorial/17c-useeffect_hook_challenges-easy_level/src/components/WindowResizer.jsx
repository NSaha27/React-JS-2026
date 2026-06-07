import { useEffect, useState } from "react";
import styles from "./css/windowResizer.module.css";

export default function WindowResizer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles["display-size"]}>
        {windowWidth}px X {windowHeight}px
      </span>
    </div>
  );
}
