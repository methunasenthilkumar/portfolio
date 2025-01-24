import React from "react";

const Education = () => {
  const educationStyle = {
    padding: "80px 20px",
    backgroundColor: "#f4f9ff", // Softer blue for better aesthetics
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: "bold",
    color: "#0056b3", // Deep blue for heading
    marginBottom: "40px", // Space below the heading
  };

  const educationItemStyle = {
    margin: "20px auto",
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)", // Enhanced shadow for modern look
    maxWidth: "600px",
    textAlign: "left",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.03)"; // Subtle zoom on hover
    e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Elevated shadow on hover
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
  };

  const degreeStyle = {
    fontSize: "1.4rem", // Slightly larger font
    fontWeight: "bold",
    color: "#007BFF",
    marginBottom: "5px", // Space below the degree title
  };

  const detailsStyle = {
    fontSize: "1.1rem",
    color: "#555",
    marginTop: "8px",
    lineHeight: "1.6", // Improved line spacing
  };

  return (
    <section style={educationStyle}>
      <h2 style={headingStyle}>Education</h2>
      <div
        style={educationItemStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={degreeStyle}>B.Tech (AI-DS)</div>
        <p style={detailsStyle}>
          Sri Eshwar College of Engineering | 2023 – 2027 | CGPA: 7.5
        </p>
      </div>
      <div
        style={educationItemStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={degreeStyle}>HSC</div>
        <p style={detailsStyle}>
          GRD Public School | 2021 – 2023 | Percentage: 73.60%
        </p>
      </div>
      <div
        style={educationItemStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={degreeStyle}>SSLC</div>
        <p style={detailsStyle}>
          Adharsh Vidhyalaya Public School | 2020 – 2021 | Percentage: 74.80%
        </p>
      </div>
    </section>
  );
};

export default Education;
