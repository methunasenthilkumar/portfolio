import React from "react";
import p1 from "../assets/p1.jpg"; // Import the image from the assets folder

const About = () => {
  const aboutContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 20px",
    backgroundColor: "#f9f9f9", // Slightly lighter background for better contrast
    textAlign: "left",
    flexWrap: "wrap", // Ensures responsiveness on smaller screens
  };

  const textContainerStyle = {
    maxWidth: "600px",
    marginRight: "20px",
    marginBottom: "20px", // Adds spacing for responsiveness when wrapping
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: "bold",
    color: "#007BFF", // Highlighted color for the heading
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    color: "#555",
  };

  const imageStyle = {
    width: "300px", // Slightly larger for better emphasis
    height: "400px", // Portrait size for professional look
    objectFit: "cover",
    borderRadius: "15px", // More rounded corners for a softer design
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)", // Enhanced shadow for a modern feel
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.05)"; // Subtle zoom effect on hover
    e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Enhanced shadow on hover
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
  };

  return (
    <section style={aboutContainerStyle}>
      <div style={textContainerStyle}>
        <h2 style={headingStyle}>About Me</h2>
        <p style={paragraphStyle}>
          I am an AI-DS undergraduate with a strong interest in leveraging
          technology to create solutions that positively impact society. My work
          is focused on accessibility, inclusivity, and data-driven
          decision-making. Apart from coding, I enjoy exploring design tools like
          Canva and Figma and staying updated on emerging technologies.
        </p>
      </div>
      <img
        src={p1}
        alt="Methuna MS"
        style={imageStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </section>
  );
};

export default About;
