import { useRef, forwardRef } from "react"

export default function ForwardRef({ onRegistrationFormSubmit }) {
  const username = useRef("");
  const name = useRef("");
  const aadhaar = useRef("");
  const phone = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");

  const handleRegistrationFormSubmit = (ev) => {
    ev.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      console.error("***confirm password isn't matched with password!");
      return false;
    }
    const formData = { username: username.current.value, name: name.current.value, aadhaar: aadhaar.current.value, phone: phone.current.value, email: email.current.value, password: password.current.value };
    onRegistrationFormSubmit(formData);
  }

  return <div className="">
    <h2 className="">Registration</h2>
    <p className="">***fill up the following fields</p>
    <div className="">
      <form action="" method="post" className="" onSubmit={handleRegistrationFormSubmit}>

        {/* <BeforeReact19Input label={"Username"} fieldType={"text"} inputFieldName={"username"} ref={username} />
        <BeforeReact19Input label={"Name"} fieldType={"text"} inputFieldName={"name"} ref={name} />
        <BeforeReact19Input label={"Aadhaar"} fieldType={"text"} inputFieldName={"aadhaar"} ref={aadhaar} />
        <BeforeReact19Input label={"Phone"} fieldType={"text"} inputFieldName={"phone"} ref={phone} />
        <BeforeReact19Input label={"Email"} fieldType={"email"} inputFieldName={"email"} ref={email} />
        <BeforeReact19Input label={"Password"} fieldType={"password"} inputFieldName={"password"} ref={password} />
        <BeforeReact19Input label={"Confirm Password"} fieldType={"password"} inputFieldName={"confirmPassword"} ref={confirmPassword} /> */}

        <AfterReact19Input label={"Username"} fieldType={"text"} inputFieldName={"username"} ref={username} />
        <AfterReact19Input label={"Name"} fieldType={"text"} inputFieldName={"name"} ref={name} />
        <AfterReact19Input label={"Aadhaar"} fieldType={"text"} inputFieldName={"aadhaar"} ref={aadhaar} />
        <AfterReact19Input label={"Phone"} fieldType={"text"} inputFieldName={"phone"} ref={phone} />
        <AfterReact19Input label={"Email"} fieldType={"email"} inputFieldName={"email"} ref={email} />
        <AfterReact19Input label={"Password"} fieldType={"password"} inputFieldName={"password"} ref={password} />
        <AfterReact19Input label={"Confirm Password"} fieldType={"password"} inputFieldName={"confirmPassword"} ref={confirmPassword} />
        <button type="submit" className="">Register</button>
      </form>
    </div>
  </div>
}

// const BeforeReact19Input = forwardRef((props, ref) => {
//   return <div className="">
//     <label htmlFor={props.inputFieldName} className="">{props.label}</label><br />
//     <input type={props.fieldType} name={props.inputFieldName} id={props.inputFieldName} className="" ref={ref} />
//   </div>
// });

const AfterReact19Input = ({ label, inputFieldName, fieldType, ref }) => {
  return <div className="">
    <label htmlFor={inputFieldName} className="">{label}</label><br />
    <input type={fieldType} name={inputFieldName} id={inputFieldName} className="" ref={ref} />
  </div>
}