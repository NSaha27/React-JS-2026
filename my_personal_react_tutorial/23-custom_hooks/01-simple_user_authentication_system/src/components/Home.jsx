import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const loggedIn = location.state?.loggedIn;

  const loggedInUser = localStorage.getItem("loggedInUser")
    ? JSON.parse(localStorage.getItem("loggedInUser"))
    : "";
  return (
    <div className="">
      {loggedIn && <h4 className="">🎉 Log in successful!</h4>}
      <h1 className="">Welcome back {loggedInUser}!</h1>
    </div>
  );
}
