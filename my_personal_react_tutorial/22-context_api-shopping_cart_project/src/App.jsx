import { useState } from "react";

import "./App.css";
import UserContextProvider from "./components/UserContextProvider";
import CourseContextProvider from "./components/CourseContextProvider";
import MainContent from "./components/MainContent";
import SideMenu from "./components/SideMenu";

function App() {
  const [menuOption, setMenuOption] = useState("home");
  const handleSelectMenu = (menu) => {
    setMenuOption(menu.toLowerCase());
  };

  return (
    <>
      <UserContextProvider>
        <CourseContextProvider>
          <SideMenu onSelectMenu={handleSelectMenu} />
          <MainContent menuOption={menuOption} />
        </CourseContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
