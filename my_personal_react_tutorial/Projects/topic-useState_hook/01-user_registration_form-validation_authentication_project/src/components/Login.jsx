import { useState } from "react";

export default function Login({ currentUser, onSubmitLoginForm }) {
  const [formData, setFormData] = useState({
    username: currentUser.username,
    password: "",
  });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    onSubmitLoginForm(formData);
    setFormData({ username: "", password: "" });
  };
  return (
    <div className="">
      <h2 className="">User Login</h2>
      <div className="">*enter the following to log in !</div>
      <div className="">
        <form action="" method="post" onSubmit={handleFormSubmit}>
          <div className="">
            <label htmlFor="username" className="">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className=""
              placeholder="enter username..."
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
              placeholder="enter password..."
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <button type="submit" className="">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
