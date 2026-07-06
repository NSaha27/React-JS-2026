import { useContext, useState } from "react";

import UserContext from "./UserContext";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { onLoginUser } = useContext(UserContext);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((curData) => ({ ...curData, [name]: value }));
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    onLoginUser(formData.username, formData.password);
  };

  return (
    <div className="">
      <h2 className="">User Login</h2>
      <p className="">*Enter the following...</p>
      <div className="">
        <form action="" method="post" className="" onSubmit={handleFormSubmit}>
          <div className="">
            <label htmlFor="username" className="">
              Username
            </label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              className=""
              value={FormData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="password" className="">
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className=""
              value={FormData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <button type="submit" className="">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
