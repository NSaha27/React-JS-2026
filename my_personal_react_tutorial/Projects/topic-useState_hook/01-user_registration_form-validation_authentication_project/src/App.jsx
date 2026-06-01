import { useState } from "react";

import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [users, setUsers] = useState([
    {
      username: "admin",
      name: "admin",
      phone: "",
      email: "",
      password: "admin",
      isLoggedIn: false,
      contacts: [],
      chats: [],
    },
  ]);
  const [createAccount, setCreateAccount] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: "admin",
    name: "admin",
    phone: "",
    email: "",
    password: "admin",
    isLoggedIn: false,
    contacts: [],
    chats: [],
  });

  const handleCreateAccBtnClick = () => {
    setCreateAccount(true);
  };

  const handleSubmitRegForm = (regData) => {
    const existingRegisteredUsers = [...users];
    existingRegisteredUsers.push(regData);
    setUsers(existingRegisteredUsers);
    setCreateAccount(false);
  };
  const handleSubmitLoginForm = (loginData) => {
    const userFound = users.find(
      (user) => user.username === loginData.username,
    );
    if (!userFound) {
      console.error("***no such user exists !");
      return false;
    }
    if (userFound.password !== loginData.password) {
      console.error("***invalid login credentials !");
      return false;
    }
    setUsers((prev) => {
      return prev.map((usr) => {
        if (usr.username === userFound.username) {
          return { ...usr, isLoggedIn: true };
        } else {
          return usr;
        }
      });
    });
    const loggedInUsers = localStorage.getItem("loggedInUsers")
      ? JSON.parse(localStorage.getItem("loggedInUsers"))
      : [];
    loggedInUsers.push(loginData.username);
    localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsers));
    console.log(`***log in successful, welcome back ${userFound.name} !`);
  };

  const handleSetCurrentUser = (curUser) => {
    const user = users.find((usr) => usr.username === curUser);
    setCurrentUser(user);
  };
  const handleAddToContact = (contactUser, currentUser) => {
    setUsers((prev) => {
      return prev.map((usr) => {
        if (usr.username === currentUser) {
          usr.contacts.push(contactUser);
          return usr;
        } else {
          return usr;
        }
      });
    });
  };

  return (
    <>
      <div className="grid grid-cols-3">
        <Sidebar
          onCreateAccBtnClick={handleCreateAccBtnClick}
          users={users}
          currentUser={currentUser}
          onSetCurrentUser={handleSetCurrentUser}
        />
        <Main
          wantToCreateAcc={createAccount}
          onSubmitRegForm={handleSubmitRegForm}
          onSubmitLoginForm={handleSubmitLoginForm}
          users={users}
          currentUser={currentUser}
          onAddToContact={handleAddToContact}
        />
      </div>
    </>
  );
}

export default App;
