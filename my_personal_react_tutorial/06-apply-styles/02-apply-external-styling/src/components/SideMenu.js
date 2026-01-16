import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import "./css/side_menu.css";

function SideMenu() {
  return (
    <span className="side-menu">
      <a href="/" className="menu-link">
        <FaLinkedin />
      </a>
      <a href="/" className="menu-link">
        <FaTwitter />
      </a>
      <a href="/" className="menu-link">
        <FaYoutube />
      </a>
      <a href="/" className="menu-link">
        <FaGithub />
      </a>
      <a href="/" className="menu-link">
        <FaFacebook />
      </a>
    </span>
  );
}

export default SideMenu;
