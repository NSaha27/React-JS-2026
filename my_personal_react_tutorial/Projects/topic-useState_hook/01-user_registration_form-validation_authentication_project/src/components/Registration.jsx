import { useState } from "react";

export default function Registration({ onSubmitRegForm }) {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    const updatedFormData = {
      ...formData,
      isLoggedIn: false,
      contacts: [],
      chats: [],
    };
    onSubmitRegForm(updatedFormData);
  };

  return (
    <div className="">
      <h2 className="">User Registration</h2>
      <div className="">*fill up the following details to register !</div>
      <div className="">
        <form action="" method="post" onSubmit={handleFormSubmit}>
          <div className="flex flex-column gap-2">
            <label htmlFor="username" className="">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className=""
              placeholder="enter username..."
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-column gap-2">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className=""
              placeholder="enter your name..."
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-column gap-2">
            <label htmlFor="phone" className="">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className=""
              placeholder="enter phone number..."
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-column gap-2">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className=""
              placeholder="enter email ID..."
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-column gap-2">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className=""
              placeholder="enter password..."
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-column gap-2">
            <label htmlFor="confirmPassword" className="">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className=""
              placeholder="confirm password..."
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
      <div className="">OR</div>
      <div className="">
        Already registered?{" "}
        <a href="/login" className="">
          Log in
        </a>
      </div>
    </div>
  );
}
