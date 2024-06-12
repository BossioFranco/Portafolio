import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn, DownloadLink } from "./HeaderElements";
import { AiOutlineDownload } from 'react-icons/ai'; // Importa el icono de descarga

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img
            src="/logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a className="btn PrimaryBtn" download href='./FrancoBossiocv.pdf'>
            <DownloadLink>
              Download CV
              <AiOutlineDownload style={{marginLeft:5}}/>
            </DownloadLink>
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
