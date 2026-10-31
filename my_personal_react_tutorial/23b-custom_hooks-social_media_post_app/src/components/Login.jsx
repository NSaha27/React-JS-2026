import {useState, useContext} from "react";

import {UserContext} from "./user/UserContextProvider";


function Login(){
  const [formData, setFormData] = useState({username: "", password: ""});
  const { findUserByUsername } = useContext(UserContext);

  const handleInputChange = (ev) => {
    const {name, value} = ev.target;
    setFormData(prev => ({...prev, [name]: value}));
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    try{
      const user = findUserByUsername(formData.username);
      if(!user){
        throw new Error("No such user was found!");
      }
      if(user.password !== formData.password){
        alert("Invalid login credentials!");
        return false;
      }
      alert("Log in successful!");
      return true;
    }catch(err){
      alert(err.message);
      return false;
    }
  }

  return <div className="">
    <h2 className="">Log In</h2>
    <div className="">
      <form action="" method="post" onSubmit={handleFormSubmit}>
        <div className=""><label htmlFor="username" className="">Username</label><br /><input type="text" name="username" id="username" className="" value={formData.username} onChange={handleInputChange} /></div>
        <div className=""><label htmlFor="password" className="">Password</label><br /><input type="password" name="password" id="password" className="" value={formData.password} onChange={handleInputChange} /></div>
        <div className=""><button type="submit" className="">Login</button></div>
      </form>
    </div>
  </div>
}

export default Login;