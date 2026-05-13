import { MdLightMode, MdOutlineNightlightRound } from "react-icons/md";

function Navbar({ onToggleTheme, theme }) {
  return (
    <nav className="py-3 px-10 bg-purple-500 flex justify-between items-center">
      <h2 className="text-lg capitalize font-semibold text-white">
        Toggle
        <br />
        Background
      </h2>
      <ul className="list-none p-0 m-0 overflow-hidden">
        <li className="float-left">
          <a
            href=""
            className="decoration-0 block px-6 py-1 font-semibold text-gray-200 hover:text-white"
          >
            Home
          </a>
        </li>
        <li className="float-left">
          <a
            href=""
            className="decoration-0 block px-6 py-1 font-semibold text-gray-200 hover:text-white"
          >
            Account
          </a>
        </li>
        <li className="float-left">
          <a
            href=""
            className="decoration-0 block px-6 py-1 font-semibold text-gray-200 hover:text-white"
          >
            Blogs
          </a>
        </li>
      </ul>
      <span className="w-13 p-1 bg-purple-900 rounded-xl flex">
        <button
          className={`bg-white w-4 h-4 rounded-xl p-0.5 text-xl text-purple-900 relative ${theme === "light" ? "animate-lighttoggle" : "animate-darktoggle"} flex justify-center items-center font-bold`}
          onClick={() => onToggleTheme()}
        >
          {theme === "light" ? <MdOutlineNightlightRound /> : <MdLightMode />}
        </button>
      </span>
    </nav>
  );
}

export default Navbar;
