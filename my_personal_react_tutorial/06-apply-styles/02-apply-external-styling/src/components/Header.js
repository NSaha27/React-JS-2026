import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./css/header.css";

function Header(props) {
  const [dispNavbar, setDispNavbar] = useState(true);

  return (
    <header className="header">
      <GiHamburgerMenu className="hamburger-btn" onClick={() => setDispNavbar(!dispNavbar)} />
      <nav className="navbar" style={{display: dispNavbar ? "flex" : "none"}}>
        <span className="logo">
          <img
            src={`images/${props.profile.pImage}`}
            alt="profile-image"
            className="profile-image"
          />
          <h2 className="profile-name">{props.profile.pName}</h2>
        </span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
