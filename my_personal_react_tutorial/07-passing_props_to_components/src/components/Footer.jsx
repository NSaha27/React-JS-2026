import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "./Button.jsx";
import "./css/footer.css";

function Footer({ profile }) {
  return (
    <div className="footer">
      <Button hyperLink={profile.pGitHubAccLink}>
        <FaGithub />
      </Button>
      <Button hyperLink={profile.pLinkedInAccLink}>
        <FaLinkedin />
      </Button>
    </div>
  );
}

export default Footer;
