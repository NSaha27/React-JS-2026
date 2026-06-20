import { useRef } from "react";

export default function Login({ onSubmitLoginForm }) {
  const username = useRef("");
  const password = useRef("");

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    const formData = { username: username.current.value, password: password.current.value };
    onSubmitLoginForm(formData);
  }

  return <div className="">
    <h2 className="">Log in form</h2>
    <p className="">*enter the following</p>
    <div className="">
      <form action="" method="post" className="" onSubmit={handleFormSubmit}>
        <div className="">
          <label htmlFor="username" className="">Username</label><br />
          <input type="text" name="username" id="username" className="" ref={username} />
        </div>
        <div className="">
          <label htmlFor="password" className="">Password</label><br />
          <input type="password" name="password" id="password" className="" ref={password} />
        </div>
        <div className="">
          <button type="submit" className="">Log In</button>
        </div>
      </form>
    </div>
  </div>
}