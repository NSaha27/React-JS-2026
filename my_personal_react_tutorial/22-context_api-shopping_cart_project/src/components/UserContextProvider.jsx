import { useState } from "react";
import UserContext from "./UserContext";

export default function UserContextProvider({ children }) {
  const [users, setUsers] = useState([
    { username: "admin", password: "Niladri@12345" },
  ]);
  const onRegisterUser = (data) => {
    if (typeof data !== "object" || Object.keys(data).length === 0) {
      console.error("***invalid user data!");
      return false;
    }
    const userFound = users.find(
      (usr) => usr.username === data.username && usr.phone === data.phone,
    );
    if (userFound) {
      console.error("***user already registered!");
      return false;
    }
    setUsers((prev) => [...prev, data]);
    console.log("***registration successful!");
    return true;
  };
  const onLoginUser = (username, password) => {
    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      username.length === 0 ||
      password.length === 0
    ) {
      console.error("***invalid login data!");
      return false;
    }
    const userFound = users.find(
      (usr) => usr.username === username && usr.password === password,
    );
    if (!userFound) {
      console.error("***invalid username or password!");
      return false;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(username));
    console.log("***log in successful!");
    return true;
  };

  return (
    <UserContext.Provider value={{ users, onRegisterUser, onLoginUser }}>
      {children}
    </UserContext.Provider>
  );
}
