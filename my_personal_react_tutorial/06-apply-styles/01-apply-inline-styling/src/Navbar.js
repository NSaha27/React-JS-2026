
function Navbar(props){
  const navStyle = {
        padding: "1rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      };
  const logoStyle = { display: "flex", alignItems: "center", gap: "2px" };
  const logoImgStyle = { width: "12vw", height: "12vh", borderRadius: "50%" };
  const logoTextStyle = {
            fontSize: "1.1rem",
            fontWeight: "600",
            textTransform: "uppercase",
            color: "#333",
          };
  const menuStyle = {
          listStyleType: "none",
          padding: "0",
          margin: "0",
          overflow: "hidden",
        };
  const menuListStyle = { float: "left" };
  const menuListHyperlinkStyle = {
              textDecoration: "none",
              display: "block",
              padding: "8px 16px",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#333",
              textTransform: "uppercase",
            };
  return (
    <nav style={navStyle}>
      <span style={logoStyle}>
        <img
          src={`images/${props.profile.profileImg}`}
          alt="my profile"
          style={logoImgStyle}
        />
        <h3 style={logoTextStyle}>{props.profile.profileName}</h3>
      </span>
      <ul style={menuStyle}>
        <li style={menuListStyle}>
          <a href="/" style={menuListHyperlinkStyle}>
            Home
          </a>
        </li>
        <li style={menuListStyle}>
          <a href="/about" style={menuListHyperlinkStyle}>
            About
          </a>
        </li>
        <li style={menuListStyle}>
          <a href="/" style={menuListHyperlinkStyle}>
            Projects
          </a>
        </li>
        <li style={menuListStyle}>
          <a href="/" style={menuListHyperlinkStyle}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;