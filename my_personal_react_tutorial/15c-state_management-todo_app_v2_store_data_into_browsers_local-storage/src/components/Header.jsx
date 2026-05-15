import { useState } from "react";

function Header({ timer }) {
  const [time, setTime] = useState(timer.time);
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <header className="">
      <h1 className="text-4xl font-extrabold capitalize text-center text-gray-900">
        Todo App
      </h1>
      <h3 className="text-xl font-semibold text-center text-gray-900 mt-2">
        {timer.date} {time}
      </h3>
    </header>
  );
}

export default Header;
