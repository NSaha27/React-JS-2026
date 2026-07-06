import { useContext, useState } from "react";

import UserContext from "./UserContext";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState([]);
  const { onRegisterUser } = useContext(UserContext);

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((curData) => ({ ...curData, [name]: value }));
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    if (
      formData.username.length === 0 ||
      formData.name.length === 0 ||
      formData.phone.length === 0 ||
      formData.email.length === 0 ||
      formData.password.length === 0 ||
      formData.confirmPassword.length === 0
    ) {
      setErrors((prev) => [...prev, "all fields are required!"]);
      return false;
    }
    if (formData.password != formData.confirmPassword) {
      setErrors((prev) => [
        ...prev,
        "confirm password must be same as password",
      ]);
      return false;
    }
    onRegisterUser({
      username: formData.username,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <div className="">
      <h2 className="">User Login</h2>
      <p className="">*Enter the following...</p>
      {errors.length > 0 ? (
        <div className="">
          <ul className="">
            {errors.map((err, index) => (
              <li className="" key={index}>
                {err}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
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
            <label htmlFor="name" className="">
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className=""
              value={FormData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="phone" className="">
              Phone
            </label>
            <br />
            <input
              type="text"
              name="phone"
              id="phone"
              className=""
              value={FormData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="email" className="">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className=""
              value={FormData.email}
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
            <label htmlFor="confirmPassword" className="">
              Confirm Password
            </label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className=""
              value={FormData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <button type="submit" className="">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
