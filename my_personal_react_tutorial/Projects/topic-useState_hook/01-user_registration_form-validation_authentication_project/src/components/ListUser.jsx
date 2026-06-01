export default function ListUser({ user, onSetCurrentUser }) {
  return (
    <li className="" onClick={() => onSetCurrentUser(user.username)}>
      {user.name}{" "}
      <span
        className={`${user.isLoggedIn ? "bg-green-500" : "bg-red-500"}`}
      ></span>
    </li>
  );
}
