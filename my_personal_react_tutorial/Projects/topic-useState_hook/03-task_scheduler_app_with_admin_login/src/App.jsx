import { useEffect, useState } from "react";
import "./App.css";
import Registration from "./components/Registration";
import Login from "./components/Login";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("")
      .then((result) => result.json())
      .then((data) => {
        const existingUsers = data.users;
        const updatedUserList = existingUsers.map((user) => ({
          ...user,
          tasks: [],
          isLoggedIn: false,
        }));
        setUsers(updatedUserList);
      })
      .catch((err) => {
        console.error(err.message);
        return false;
      });
  }, []);

  const handleAddUser = (newUser) => {
    const userFound = users.find((user) => user.username === newUser.username);
    if (userFound) {
      return { status: false };
    }
    setUsers((prev) => [...prev, newUser]);
    return { status: true };
  };
  const handleDeleteUser = (username) => {
    const userFound = users.find((user) => user.username === username);
    if (!userFound) {
      return { status: false };
    }
    const newUserList = users.filter((user) => user.username !== username);
    setUsers(newUserList);
    return { status: true };
  };
  const handleUserLogin = async ({ username, password }) => {
    const userFound = users.find((user) => user.username === username);
    if (!userFound) {
      return { status: false };
    }
    const isPswMatched = userFound.password === password;
    if (!isPswMatched) {
      return { status: false };
    }
    setUsers((curUsers) =>
      curUsers.map((user) => {
        if (user.username === username) {
          return { ...user, isLoggedIn: true };
        } else {
          return user;
        }
      }),
    );
    await cookieStore.set("task_scheduler_user", username);
    return { status: true };
  };

  return (
    <>
    {
      cookieStore.get("task_scheduler_user")
      .then(username => {

      })
      .catch(err => {
        console.error(err.message);
        return <Login
      })
    }
      <Registration onAddUser={handleAddUser} />
    </>
  );
}

export default App;
