import { useState } from "react";

import ForwardRef from "./components/ForwardRef";
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  const handleRegFormSubmit = (data) => {
    const user = users.find(usr => usr.username === data.username);
    if (user) {
      console.log("***user already present!");
      return false;
    }
    setUsers(prev => ([...prev, data]));
  }

  return (
    <>
      <ForwardRef onRegistrationFormSubmit={handleRegFormSubmit} />
    </>
  )
}

export default App
