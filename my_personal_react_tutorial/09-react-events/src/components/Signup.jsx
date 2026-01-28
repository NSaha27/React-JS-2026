function setUsername() {
  const nums = "0123456789";
  let username = "";
  while (username.length < 15) {
    username += Math.floor(Math.random() * nums.length);
    if (username[0] === "0") {
      username = username.slice(1);
    }
  }
  return username;
}

function handleSignupFormSubmit(event) {
  event.preventDefault();
  const {
    username,
    name,
    dob,
    govnIdType,
    govnIdNumber,
    address,
    mobile,
    email,
    password,
    confirmPassword,
  } = event.target;

  console.log(`User details:
  username: ${username.value}
  name: ${name.value}
  date of birth: ${dob.value}
  govn. id type: ${govnIdType.value}
  govn. id number: ${govnIdNumber.value}
  address: ${address.value}
  mobile: ${mobile.value}
  email: ${email.value}
  password: ${password.value}
  confirm password: ${confirmPassword.value}
  `);

  username.value = setUsername();
  name.value = "";
  dob.value = "";
  govnIdType.value = "";
  govnIdNumber.value = "";
  address.value = "";
  mobile.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
}

function Signup() {
  const username = setUsername();
  return (
    <div className="">
      <h2 className="">User Signup</h2>
      <div className="">
        <form
          method="post"
          className=""
          onSubmit={(event) => handleSignupFormSubmit(event)}
        >
          <input type="hidden" name="username" value={username} />
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" name="name" id="name" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input type="date" name="dob" id="dob" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="govnIdType" className="form-label">
              Govn. ID Type
            </label>
            <select name="govnIdType" id="govnIdType" className="form-control">
              <option value="" selected disabled className="">
                Select an option
              </option>
              <option value="aadhaar" className="">
                Aadhaar/Virtual Aadhaar
              </option>
              <option value="driving-license" className="">
                Driving License
              </option>
              <option value="pan" className="">
                Pan
              </option>
              <option value="passport" className="">
                Passport
              </option>
              <option value="voter-id" className="">
                Voter ID
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="govnIdNumber" className="form-label">
              Govn. ID Number
            </label>
            <input
              type="text"
              name="govnIdNumber"
              id="govnIdNumber"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Full Address
            </label>
            <textarea
              name="address"
              id="address"
              className="form-control"
              rows="8"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
