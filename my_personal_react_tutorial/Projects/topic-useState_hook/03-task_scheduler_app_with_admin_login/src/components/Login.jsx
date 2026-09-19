import { useState } from "react";

function Login({ onUserLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((curData) => ({ ...curData, [name]: value }));
  };
  const handleLoginFormSubmit = (ev) => {
    ev.preventDefault();
    onUserLogin(formData);
    setFormData({
      username: "",
      password: "",
    });
  };
  return (
    <div className="">
      <h2 className="">User Login</h2>
      <div className="">
        <form method="post" onSubmit={handleLoginFormSubmit}>
          <div className="">
            <label htmlFor="username" className="">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className=""
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className=""
              value={formData.password}
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

export default Login;
