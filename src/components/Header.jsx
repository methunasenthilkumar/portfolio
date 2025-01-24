import React from "react";
import "./Header.css";

const Header = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#333",
    color: "#fff",
    position: "sticky",
    top: "0",
    zIndex: "1000",
  };

  const navStyle = {
    display: "flex",
    gap: "15px",
  };

  const linkStyle = {
    color: "#ff6f61",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s",
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ margin: "0", fontSize: "1.8rem" }}>My Portfolio</h1>
      <nav style={navStyle}>
        <a href="#skills" style={linkStyle}> {/* Moved Skills link first */}
          Skills
        </a>
        <a href="#about" style={linkStyle}>
          About
        </a>
        <a href="#projects" style={linkStyle}>
          Projects
        </a>
        <a href="#contact" style={linkStyle}> {/* Moved Contact link after Skills */}
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
