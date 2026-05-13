import {useState} from "react";
import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme(curVal => curVal === "light" ? "dark" : "light");
  }

  return (
    <>
      <Navbar onToggleTheme={handleToggleTheme} theme={theme} />
      <Content theme={theme} />
    </>
  );
}

export default App;
