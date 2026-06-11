import { useState } from "react";

export default function Login({ onSubmitLoginForm }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    onSubmitLoginForm({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="">
      <h2 className="">Login</h2>
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
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              placeholder="enter username..."
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
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              placeholder="enter password..."
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
