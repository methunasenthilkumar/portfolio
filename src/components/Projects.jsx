import React from "react";

const Projects = () => {
  const projectsStyle = {
    padding: "100px 20px",
    backgroundColor: "#f7f9fc",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "40px",
  };

  const projectCardStyle = {
    margin: "20px auto",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const projectTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#007BFF",
    marginBottom: "10px",
  };

  return (
    <section style={projectsStyle}>
      <h2 style={headingStyle}>Projects</h2>
      <div
        style={projectCardStyle}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.1)";
        }}
      >
        <div style={projectTitleStyle}>
          Accessible Education App for Students with Disabilities
        </div>
        <p>
          Developed an inclusive educational app tailored for blind, deaf, and
          mute students. Key features include voice navigation, sign language
          videos, and competitive assignments.
        </p>
      </div>
    </section>
  );
};

export default Projects;
