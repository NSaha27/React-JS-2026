import {useContext, useState} from "react";
import {UserContext} from "./UserContextProvider";

function Signup(){
  const {addUser} = useContext(UserContext);
  const [formData, setFormData] = useState({username: "", name: "", sex: "M", address: "", phone: "", email: "", password: "", confirmPassword: ""});

  const handleInputChange = (ev) => {
    const {name, value} = ev.target;
    setFormData(curData => ({...curData, [name]: value}));
  };
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    addUser(formData);
    setFormData({
      username: "",
      name: "",
      sex: "M",
      address: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div className="">
      <h2 className="">User Signup</h2>
      <div className="">
        <form action="" method="post" onSubmit={handleFormSubmit}>
          <div>
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
          </div>
          <div>
            <label htmlFor="name" className="">
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className=""
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="" className="">
              Sex
            </label>
            <br />
            <div className="">
              <span>
                <input
                  type="radio"
                  name="sex"
                  id="male"
                  className=""
                  value={"M"}
                  checked={formData.sex === "M"}
                  onChange={handleInputChange}
                />{" "}
                <label htmlFor="male" className="">
                  Male
                </label>
              </span>
              <span>
                <input
                  type="radio"
                  name="sex"
                  id="female"
                  className=""
                  value={"F"}
                  checked={formData.sex === "F"}
                  onChange={handleInputChange}
                />{" "}
                <label htmlFor="female" className="">
                  Female
                </label>
              </span>
              <span>
                <input
                  type="radio"
                  name="sex"
                  id="other"
                  className=""
                  value={"O"}
                  checked={formData.sex === "O"}
                  onChange={handleInputChange}
                />{" "}
                <label htmlFor="other" className="">
                  Other
                </label>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="address" className="">
              Address
            </label>
            <br />
            <textarea
              name="address"
              id="address"
              rows="10"
              value={formData.address}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="phone" className="">
              Phone
            </label>
            <br />
            <input
              type="text"
              name="phone"
              id="phone"
              className=""
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className=""
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
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
          </div>
          <div>
            <label htmlFor="confirmPassword" className="">
              Confirm Password
            </label>
            <br />
            <input type="text" name="confirmPassword" id="confirmPassword" className="" value={formData.confirmPassword} onChange={handleInputChange} />
          </div>
          <div>
            <button type="submit" className="">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;