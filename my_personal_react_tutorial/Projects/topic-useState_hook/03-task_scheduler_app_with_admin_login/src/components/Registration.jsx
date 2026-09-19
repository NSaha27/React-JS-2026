import { useState } from "react";

function Registration({ onAddUser }) {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((curData) => ({ ...curData, [name]: value }));
  };
  const handleRegFormSubmit = (ev) => {
    ev.preventDefault();
    onAddUser(formData);
    setFormData({
      username: "",
      name: "",
      address: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <div className="">
      <h2 className="">User Registration</h2>
      <div className="">
        <form method="post" onSubmit={handleRegFormSubmit}>
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
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className=""
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="address" className="">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              className=""
              value={formData.address}
              onChange={handleInputChange}
              rows={10}
            ></textarea>
          </div>
          <div className="">
            <label htmlFor="phone" className="">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className=""
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className=""
              value={formData.email}
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
            <label htmlFor="confirmPassword" className="">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className=""
              value={formData.confirmPassword}
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

export default Registration;
