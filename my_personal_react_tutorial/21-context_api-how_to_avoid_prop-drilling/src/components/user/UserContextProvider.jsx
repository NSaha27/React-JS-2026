import UserContext from "./UserContext";
import Profile from "./Profile";

export default function UserContextProvider({ user }) {
  return <UserContext.Provider value={user}>
    <Profile />
  </UserContext.Provider>
}

