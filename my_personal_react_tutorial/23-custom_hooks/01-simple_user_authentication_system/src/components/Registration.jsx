import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./CustomHooks";

export default function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    aadhaar: "",
    buildingNumAndRoad: "",
    townOrVillage: "",
    district: "",
    state: "",
    country: "",
    zip: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { addUser } = useUserContext();

  const navigate = useNavigate();

  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((curData) => ({ ...curData, [name]: value }));
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    addUser(formData);
    navigate("/", { state: { registered: true } });
  };

  return (
    <div className="">
      <h2 className="">User Registration</h2>
      <div className="">
        <p className="">*enter the following details</p>
        <div className="">
          <form
            action=""
            method="post"
            className=""
            onSubmit={handleFormSubmit}
          >
            <table className="">
              <tbody>
                <tr className="">
                  <td className="">
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
                  </td>
                  <td className=""></td>
                </tr>
                <tr className="">
                  <td className="">
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
                  </td>
                  <td className=""></td>
                </tr>
                <tr className="">
                  <td className="">
                    <label htmlFor="aadhaar" className="">
                      Aadhaar
                    </label>
                    <br />
                    <input
                      type="password"
                      name="aadhaar"
                      id="aadhaar"
                      className=""
                      value={formData.aadhaar}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className=""></td>
                </tr>
                <tr className="">
                  <td className="" colSpan={2}>
                    <label htmlFor="buildingNumAndRoad" className="">
                      Building Number and Road
                    </label>
                    <br />
                    <input
                      type="text"
                      name="buildingNumAndRoad"
                      id="buildingNumAndRoad"
                      className=""
                      value={formData.buildingNumAndRoad}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className=""></td>
                </tr>
                <tr className="">
                  <td className="">
                    <label htmlFor="townOrVillage" className="">
                      Town or Village
                    </label>
                    <br />
                    <input
                      type="text"
                      name="townOrVillage"
                      id="townOrVillage"
                      className=""
                      value={formData.townOrVillage}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <label htmlFor="district" className="">
                      District
                    </label>
                    <br />
                    <input
                      type="text"
                      name="district"
                      id="district"
                      className=""
                      value={formData.district}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className="">
                    <label htmlFor="state" className="">
                      State
                    </label>
                    <br />
                    <input
                      type="text"
                      name="state"
                      id="state"
                      className=""
                      value={formData.state}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <label htmlFor="country" className="">
                      Country
                    </label>
                    <br />
                    <input
                      type="text"
                      name="country"
                      id="country"
                      className=""
                      value={formData.country}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td className="">
                    <label htmlFor="zip" className="">
                      Zip code
                    </label>
                    <br />
                    <input
                      type="text"
                      name="zip"
                      id="zip"
                      className=""
                      value={formData.zip}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="">
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
                  </td>
                </tr>
                <tr className="">
                  <td className="">
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
                  </td>
                </tr>
                <tr className="">
                  <td className="">
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
                  </td>
                  <td className="">
                    <label htmlFor="confirmPassword" className="">
                      Confirm Password
                    </label>
                    <br />
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className=""
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="">
                    <button type="submit" className="">
                      Register
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <p className="">OR</p>
        <p className="">
          already registered?{" "}
          <a
            href=""
            className=""
            onClick={(ev) => {
              ev.preventDefault();
              navigate("/login", { state: { registered: false } });
            }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
