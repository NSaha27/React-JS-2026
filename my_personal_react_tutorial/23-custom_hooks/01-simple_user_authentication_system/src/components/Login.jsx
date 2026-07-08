import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "./CustomHooks";

export default function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const { findUser } = useUserContext();

  const navigate = useNavigate();
  const location = useLocation();

  const registered = location.state?.registered;

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((curData) => ({ ...curData, [name]: value }));
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    const user = findUser(formData.username);
    if (Object.keys(user).length === 0) {
      setMessage("⚠️ no such user exists!");
    } else {
      const isPswMatched = formData.password === user.password;
      if (!isPswMatched) {
        setMessage("⚠️ invalid login credentials!");
      } else {
        localStorage.setItem("loggedInUser", JSON.stringify(formData.username));
        navigate("/user-home", { state: { loggedIn: true } });
      }
    }
    setFormData({
      username: "",
      password: "",
    });
  };

  setTimeout(() => {
    setMessage("");
  }, 15000);

  return (
    <div className="">
      <h2 className="">User Login</h2>
      {registered ? (
        <div className="">
          <h3 className="">🎉 Registration successful! please log in now...</h3>
        </div>
      ) : null}
      {message ? (
        <div className="">
          <h3 className="">{message}</h3>
        </div>
      ) : null}
      <div className="">
        <p className="">*enter the following details</p>
        <p className="">
          <form
            action=""
            method="post"
            className=""
            onSubmit={handleFormSubmit}
          >
            <p className="">
              <label htmlFor="username" className="">
                Username
              </label>
              <br />
              <input
                type="text"
                name="username"
                id="username"
                className=""
                value={formData.username}
                onChange={handleInputChange}
              />
            </p>
            <p className="">
              <label htmlFor="password" className="">
                Password
              </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                className=""
                value={formData.password}
                onChange={handleInputChange}
              />
            </p>
            <p className="">
              <button type="submit" className="">
                Log In
              </button>
            </p>
          </form>
        </p>
        <p className="">OR</p>
        <p className="">
          not yet registered?{" "}
          <a
            href=""
            className=""
            onClick={(ev) => {
              ev.preventDefault();
              navigate("/registration", { state: { registered: false } });
            }}
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
