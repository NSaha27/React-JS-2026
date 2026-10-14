import {useRef} from "react";

function UncontrolledForm({onRegFormSubmit}) {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleRegFormSubmit = (ev) => {
    ev.preventDefault();

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    onRegFormSubmit({name, email, password});

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  }

  return (
    <div className="">
      <h2 className="title">User Registration</h2>
      <div className="">
        <form action="" method="post" onSubmit={handleRegFormSubmit}>
          <div className="">
            <label htmlFor="name">Name</label><br />
            <input type="text" name="name" id="name" ref={nameInputRef} style={{width: "95%", margin: "0.3rem 0rem 1rem", padding: "0.4rem"}} />
          </div>
          <div className="">
            <label htmlFor="email">Email ID</label><br />
            <input type="email" name="email" id="email" ref={emailInputRef} style={{width: "95%", margin: "0.3rem 0rem 1rem", padding: "0.4rem"}} />
          </div>
          <div className="">
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" id="password" ref={passwordInputRef} style={{width: "95%", margin: "0.3rem 0rem 1rem", padding: "0.4rem"}} />
          </div>
          <div className="">
            <button type="submit" style={{width: "100%", padding: "0.7rem 0", backgroundColor: "#222", color: "#fff", border: "none", cursor: "pointer", fontSize: "1rem"}} >Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UncontrolledForm;
