import { createContext, useReducer } from "react";

const UserContext = createContext();
const UserDispatchContext = createContext();

const initialUsers = [
  {
    username: "admin",
    name: "Niladri Saha",
    phone: "+918420520344",
    email: "niladri.saha31@example.com",
    password: "Niladri@12345",
    dateOfRegistration: "2026-07-23",
  },
];
const userReducer = (curState, action) => {
  if (action.type === "ADD_USER") {
    const userFound = curState.find(
      (state) => state.username === action.payload.username,
    );
    if (userFound) {
      console.log("*user already exists!");
      return curState;
    }
    return [...curState, action.payload];
  } else if (action.type === "UPDATE_USER") {
    const userFoundAt = curState.findIndex(
      (state) => state.username === action.payload.username,
    );
    if (userFoundAt === -1) {
      console.log("*no such user found!");
      return curState;
    }
    const updatedUserList = [...curState];
    updatedUserList.splice(userFoundAt, 1, action.payload);
    return updatedUserList;
  } else if (action.type === "DELETE_USER") {
    // write code for delete user
  }
};

function UserContextProvider() {
  const [users, dispatch] = useReducer(userReducer, initialUsers);

  return (
    <UserContext>
      <UserDispatchContext></UserDispatchContext>
    </UserContext>
  );
}
