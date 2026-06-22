import { useContext } from "react";
import UserContext from "./UserContext";

export default function Profile() {
  const user = useContext(UserContext);

  return <div className="">
    <h2 className="">User details:</h2>
    <table className="">
      <thead>
        <tr>
          <th>Username</th>
          <th>Full name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Email ID</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.username}</td>
          <td>{user.name}</td>
          <td>{user.gender}</td>
          <td>{user.dob}</td>
          <td>{user.address}</td>
          <td>{user.phone}</td>
          <td>{user.email}</td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
}