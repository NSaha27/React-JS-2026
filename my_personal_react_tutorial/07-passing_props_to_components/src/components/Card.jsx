import Avatar from "./Avatar";
import Footer from "./Footer";
import Profile from "./Profile";
import "./css/card.css";

function Card({ profile }) {
  return (
    <div className="card">
      <Avatar
        pImgFileName={profile.pImgFileName}
        imgName={"profile image"}
        size={120}
      />
      <Profile profile={{ ...profile }} />
      <Footer profile={{ ...profile }} />
    </div>
  );
}

export default Card;
