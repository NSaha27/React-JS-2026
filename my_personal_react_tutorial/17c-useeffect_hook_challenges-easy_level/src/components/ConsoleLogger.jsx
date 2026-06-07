import { useEffect, useState } from "react";

export default function ConsoleLogger() {
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (
      name.length === 0 &&
      DOB.length === 0 &&
      phone.length === 0 &&
      email.length === 0
    ) {
      console.log("Component mounted !");
    } else {
      console.log("Component updated !");
    }
  }, [name, DOB, phone, email]);

  return (
    <div className="">
      <div className="">
        <span className="">
          <strong>Name : </strong>
          {name}
        </span>
        <span className="">
          <strong>DOB : </strong>
          {DOB}
        </span>
        <span className="">
          <strong>Phone : </strong>
          {phone}
        </span>
        <span className="">
          <strong>Email : </strong>
          {email}
        </span>
      </div>
      <div className="">
        <table className="">
          <tbody>
            <tr>
              <th>Name :</th>
              <td>
                <input
                  type="text"
                  name="name"
                  id=""
                  className=""
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  placeholder="enter your name"
                />
              </td>
            </tr>
            <tr>
              <th>DOB (dd/mm/yyyy):</th>
              <td>
                <input
                  type="date"
                  name="dob"
                  id=""
                  className=""
                  value={DOB}
                  onChange={(ev) => setDOB(ev.target.value)}
                  placeholder="select your date of birth"
                />
              </td>
            </tr>
            <tr>
              <th>Phone :</th>
              <td>
                <input
                  type="text"
                  name="phone"
                  id=""
                  className=""
                  value={phone}
                  onChange={(ev) => setPhone(ev.target.value)}
                  placeholder="enter your phone number"
                />
              </td>
            </tr>
            <tr>
              <th>Email :</th>
              <td>
                <input
                  type="email"
                  name="email"
                  id=""
                  className=""
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  placeholder="enter your email ID"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
