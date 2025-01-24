import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px", // Reduced padding
    textAlign: "center",
    position: "fixed", // Sticks it to the bottom
    width: "100%",
    bottom: "0", // Ensures it's at the very bottom
    boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for a modern look
    fontSize: "0.9rem", // Reduced font size
  };

  const linkStyle = {
    color: "#007BFF",
    textDecoration: "none",
    fontWeight: "bold",
    margin: "0 8px", // Reduced margin between links
    fontSize: "0.9rem", // Match text size to footer
  };

  return (
    <footer style={footerStyle}>
      <p>© 2025 Methuna MS | All Rights Reserved</p>
      <p>
        <a
          href="https://github.com/methunasenthil"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        |
        <a
          href="https://www.linkedin.com/in/methuna-senthilkumar-a17467276"
          style={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
