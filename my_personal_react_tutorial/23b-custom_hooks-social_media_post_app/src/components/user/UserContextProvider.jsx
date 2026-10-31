import { createContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider(children){
  const [users, setUsers] = useState([]);

  const addUser = (data) => {
    if(!(data instanceof Object)){
      alert("Invalid form data!");
      return;
    }
    const userFound = users.find(user => user.username === data.username && user.phone === data.phone);
    if(userFound){
      alert("You're already registered, please login!");
      return;
    }
    setUsers(curUsers => [...curUsers, data]);
  };
  const findUserByUsername = (username) => {
    if(username.length === 0){
      throw new Error("Invalid username!");
    }
    return users.find(user => user.username === username);
  }
  const getAllUsers = () => {
    return users;
  }
  const updateUser = (newData) => {
    if (!(newData instanceof Object)) {
      alert("Invalid form data!");
      return;
    }
    const userFound = findUserByUsername(newData.username);
    if (!userFound) {
      alert("No such user found!");
      return;
    }
    setUsers(curUsers => curUsers.map(usr => {
        return usr.username === newData.username ? newData : usr
      }));
  };
  const deleteUser = (username) => {
    const userFound = findUserByUsername(username);
    if (!userFound) {
      alert("No such user found!");
      return;
    }
    setUsers(curUsers => curUsers.filter(usr => usr.username !== username));
  };

  return (
    <UserContext.Provider
      value={{
        addUser,
        findUserByUsername,
        getAllUsers,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export {UserContext, UserContextProvider};