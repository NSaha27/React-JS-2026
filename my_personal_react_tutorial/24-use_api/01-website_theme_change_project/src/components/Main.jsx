import { use } from "react";
import ThemeContext from "./ThemeContext";

export default function Main() {
  const { theme, changeTheme } = use(ThemeContext);

  return (
    <div
      className={`flex min-w-screen min-h-screen justify-center items-center ${theme === "light" ? "bg-white" : "bg-gray-800"}`}
    >
      <div className={`flex flex-col items-center gap-6`}>
        <h1
          className={`text-3xl font-bold capitalize ${theme === "light" ? "text-gray-800" : "text-white"}`}
        >
          Dark Light Theme Website
        </h1>
        <h4
          className={`text-lg font-semibold ${theme === "light" ? "text-gray-800" : "text-white"}`}
        >
          Welcome to React v19 👋
        </h4>
        <button
          className={`border-0 py-4 px-12 text-white text-lg font-semibold shadow-xl bg-blue-400 rounded-xl hover:bg-blue-600`}
          onClick={() => changeTheme()}
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
}
