import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";  // Import the Skills component

const App = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4A90E2",
    padding: "10px 20px",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "8px 16px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  const activeLinkStyle = {
    backgroundColor: "#007BFF",
    color: "#ffffff",
  };

  const hoverEffect = (e) => {
    e.target.style.backgroundColor = "#007BFF";
  };

  const resetHoverEffect = (e) => {
    e.target.style.backgroundColor = "transparent";
  };

  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={navStyle}>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={hoverEffect}
          onMouseLeave={resetHoverEffect}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={linkStyle}
          onMouseEnter={hoverEffect}
          onMouseLeave={resetHoverEffect}
        >
          About
        </Link>
        <Link
          to="/skills"
          style={linkStyle}
          onMouseEnter={hoverEffect}
          onMouseLeave={resetHoverEffect}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          style={linkStyle}
          onMouseEnter={hoverEffect}
          onMouseLeave={resetHoverEffect}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          style={linkStyle}
          onMouseEnter={hoverEffect}
          onMouseLeave={resetHoverEffect}
        >
          Contact
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />  {/* Added Skills route */}
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
