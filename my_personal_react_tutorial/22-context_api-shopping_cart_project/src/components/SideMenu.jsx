export default function SideMenu({ onSelectMenu }) {
  return (
    <div className="">
      <ul className="">
        <li className="">
          <a href="" className="" onClick={() => onSelectMenu("home")}>
            Home
          </a>
        </li>
        <li className="">
          <a href="" className="" onClick={() => onSelectMenu("courses")}>
            Courses
          </a>
        </li>
        <li className="">
          <a href="" className="" onClick={() => onSelectMenu("account")}>
            Account
          </a>
        </li>
        <li className="">
          <a href="" className="" onClick={() => onSelectMenu("login")}>
            Login / Register
          </a>
        </li>
      </ul>
    </div>
  );
}
