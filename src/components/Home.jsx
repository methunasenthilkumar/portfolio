import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const homeStyle = {
    textAlign: "center",
    padding: "120px 20px",
    background: "linear-gradient(to right, #6dd5ed, #2193b0)",
    color: "#fff",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
    animation: "fadeInDown 1s ease-in-out",
  };

  const taglineStyle = {
    fontSize: "1.5rem",
    lineHeight: "1.8",
    marginBottom: "30px",
    animation: "fadeInUp 1s ease-in-out",
  };

  const buttonStyle = {
    padding: "12px 30px",
    backgroundColor: "#ff6f61",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "25px",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, background-color 0.3s ease",
  };

  return (
    <section style={homeStyle}>
      <h1 style={headingStyle}>Hi, I'm Methuna MS</h1>
      <p style={taglineStyle}>
        Turning creativity into impactful technology and shaping ideas into
        results.
      </p>
      <Link
        to="/about"
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Learn More About Me
      </Link>
    </section>
  );
};

export default Home;
