import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { styled } from "styled-components";

const Nav = styled.nav`
  padding: "0.5rem 1rem";
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #aa3bff;
  border-radius: 6px;
`;
const Logo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: 1rem;
  object-fit: cover;
`;
const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  overflow: hidden;
`;
const MenuItem = styled.li`
  float: left;
`;
const MenuItemLink = styled.a`
  text-decoration: none;
  display: block;
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #ccc;
  padding: 0.5rem 1.2rem;
  font-family: sans-serif;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #fff;
  }
`;
const ChatLink = styled.span`
  font-size: 2.5rem;
  padding: 0.5rem;
  margin-right: 1rem;
  color: #ccc;
  transition: 0.2s;

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo src="portfolio_image.jpg" />
      <Menu>
        <MenuItem>
          <MenuItemLink href="#hero">About Me</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink href="#skills">Skills</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink href="#projects">Projects</MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink href="#contact">Contact Me</MenuItemLink>
        </MenuItem>
      </Menu>
      <ChatLink>
        <BiSolidMessageSquareDetail title="Want to leave a message for me?" />
      </ChatLink>
    </Nav>
  );
}

export default Navbar;
