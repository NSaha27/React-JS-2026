import { useState } from "react";
import UserContext from "./UserContext";

export default function UserContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  const addUser = (data) => {
    if (typeof data !== "object" || Object.keys(data).length === 0) {
      throw new Error("*invalid user data!");
    }
    setUsers((curUsers) => {
      const userFound = curUsers.find(
        (usr) => usr.username === data.username && usr.phone === data.phone,
      );
      if (userFound) {
        console.error("*user already exists!");
        return curUsers;
      } else {
        return [...curUsers, data];
      }
    });
  };

  const findUser = (username) => {
    if (username.length === 0) {
      throw new Error("*enter a valid username!");
    }
    const userFound = users.find((usr) => usr.username === username);
    return userFound ? userFound : {};
  };

  return (
    <UserContext.Provider value={{ users, addUser, findUser }}>
      {children}
    </UserContext.Provider>
  );
}
