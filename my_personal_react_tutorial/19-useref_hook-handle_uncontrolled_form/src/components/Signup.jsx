import { useRef } from "react";

export default function Signup({ onSubmitSignupForm }) {
  const username = useRef("");
  const name = useRef("");
  const gender = useRef("male");
  const address = useRef("");
  const phone = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    const formData = { username: username.current.value, name: name.current.value, gender: gender.current.value, address: address.current.value, phone: phone.current.value, email: email.current.value, password: password.current.value, conirmPassword: confirmPassword.current.value };
    onSubmitSignupForm(formData);
  }

  return <div className="">
    <h2 className="">Sign up form</h2>
    <p className="">*fill up the following fields</p>
    <div className="">
      <form action="" method="post" className="" onSubmit={handleFormSubmit}>
        <div className="">
          <label htmlFor="username" className="">Username</label><br />
          <input type="text" name="username" id="username" className="" ref={username} />
        </div>
        <div className="">
          <label htmlFor="name" className="">Name</label><br />
          <input type="text" name="name" id="name" className="" ref={name} />
        </div>
        <div className="">
          <label htmlFor="" className="">Gender</label><br />
          <div className="">
            <input type="radio" name="gender" id="gender" className="" value={"male"} ref={gender} />
            <label htmlFor="gender" className="">Male</label>
          </div>
          <div className="">
            <input type="radio" name="gender" id="gender" className="" value={"female"} ref={gender} />
            <label htmlFor="gender" className="">Female</label>
          </div>
          <div className="">
            <input type="radio" name="gender" id="gender" className="" value={"Other"} ref={gender} />
            <label htmlFor="gender" className="">Other</label>
          </div>
        </div>
        <div className="">
          <label htmlFor="address" className="">Address</label><br />
          <textarea name="address" id="address" className="" cols={30} rows={10} ref={address}></textarea>
        </div>
        <div className="">
          <label htmlFor="phone" className="">Phone</label><br />
          <input type="text" name="phone" id="phone" className="" ref={phone} />
        </div>
        <div className="">
          <label htmlFor="email" className="">Email</label><br />
          <input type="email" name="email" id="email" className="" ref={email} />
        </div>
        <div className="">
          <label htmlFor="password" className="">Password</label><br />
          <input type="password" name="password" id="password" className="" ref={password} />
        </div>
        <div className="">
          <label htmlFor="confirm-password" className="">Confirm Password</label><br />
          <input type="password" name="confirmPassword" id="confirm-password" className="" ref={confirmPassword} />
        </div>
        <div className="">
          <button type="submit" className="">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
}