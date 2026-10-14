import {useState} from "react";

// import Stopwatch from "./components/Stopwatch";
import UncontrolledForm from "./components/UncontrolledForm";
import DisplayUsers from "./components/DisplayUsers";
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  const handleSaveUser = (formData) => {
    const userFound = users.find(user => user.name === formData.name && user.email === formData.email);
    if(userFound){
      alert("User already exists!");
      return;
    }
    try{
      setUsers(prev => ([...prev, formData]));
      alert("Success! User registered");
    }catch(err){
      alert(`Unable to register the user, error: ${err.message}`);
    }
  }

  return (
    <>
      <div className="" style={{display: "grid", gridTemplateColumns: "25% 70%", columnGap: "5%"}}>
        <UncontrolledForm onRegFormSubmit={handleSaveUser} />
        <DisplayUsers users={users} />
      </div>
      {/* <Stopwatch /> */}
    </>
  )
}

export default App
