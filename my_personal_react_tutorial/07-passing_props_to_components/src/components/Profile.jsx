import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./css/profile.css";

function Profile({ profile }) {
  return (
    <div className="profile">
      <h2>{profile.pName}</h2>
      <div>
        <FaLocationDot />
        {profile.pLocation}
      </div>
      <div>{profile.pDescription}</div>
      <div>
        <FaPhoneVolume />
        {profile.pContactNumber}
      </div>
      <div>
        <MdEmail />
        {profile.pContactEmail}
      </div>
    </div>
  );
}

export default Profile;
