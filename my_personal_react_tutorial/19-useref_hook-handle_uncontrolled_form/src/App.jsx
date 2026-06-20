import { useState } from "react";

import Signup from './components/Signup';
import Login from './components/Login';
import './App.css'

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSubmitSignupForm = (data) => {
    const userPresentAt = users.findIndex(user => user.username === data.username && user.phone === data.phone);
    if (userPresentAt !== -1) {
      console.error("***user already exists!");
      return false;
    } else {
      setUsers(prev => ([...prev, data]));
      console.log("***user sign up successful!");
      setIsSignedUp(true);
      return true;
    }
  }
  const handleSubmitLoginForm = (data) => {
    const userFound = users.find(user => user.username === data.username && user.password === data.password);
    if (!userFound) {
      console.error("***invalid login credentials!");
      return false;
    }
    console.log("***log in successful, welcome back ", userFound.name, "!");
    return true;
  }

  return (
    <>
      {
        !isSignedUp ?
          <Signup onSubmitSignupForm={handleSubmitSignupForm} />
          :
          <Login onSubmitLoginForm={handleSubmitLoginForm} />
      }
    </>
  )
}

export default App
