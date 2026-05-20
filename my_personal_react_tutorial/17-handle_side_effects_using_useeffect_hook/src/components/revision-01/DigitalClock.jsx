import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [clockTime, setClockTime] = useState(() => {
    const date = new Date();
    return date.toLocaleTimeString();
  });
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockTime(date.toLocaleTimeString());
    }, 1000);
  }, [clockTime]);

  const digitalClockContainer = {
    minHeight: "100vh",
    backgroundColor: "#333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const digitalClock = {
    padding: "0",
    margin: "0",
    fontSize: "3rem",
    fontWeight: "800",
    color: "#fff",
    boxShadow: "0 2px 12px 8px #eee",
    letterSpacing: "2px",
    display: "flex",
    gap: "1rem",
  };

  return (
    <div className="digital-clock" style={digitalClockContainer}>
      <h1 className="" style={digitalClock}>
        <span>{new Date().toLocaleDateString()}</span>
        <span>{clockTime}</span>
      </h1>
    </div>
  );
}
