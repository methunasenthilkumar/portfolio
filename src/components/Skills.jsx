import React from "react";

const Skills = () => {
  const skillsContainerStyle = {
    padding: "80px 20px",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#007BFF",
    marginBottom: "40px",
  };

  const skillCategoryStyle = {
    margin: "30px 0",
  };

  const skillCategoryHeadingStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  };

  const skillListStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "30px",
  };

  const skillCardStyle = {
    backgroundColor: "#fff",
    padding: "15px 25px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontSize: "1rem",
    color: "#333",
  };

  const skills = {
    Languages: ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "Java"],
    "Core Concepts": ["DBMS", "Data Structures", "OOPS"],
    "Query Language": ["MySQL"],
    Tools: ["Canva", "GitHub", "VS Code", "Figma", "Eclipse"],
  };

  return (
    <section style={skillsContainerStyle}>
      <h2 style={headingStyle}>Skills</h2>

      {Object.keys(skills).map((category, index) => (
        <div key={index} style={skillCategoryStyle}>
          <h3 style={skillCategoryHeadingStyle}>{category}</h3>
          <div style={skillListStyle}>
            {skills[category].map((skill, idx) => (
              <div key={idx} style={skillCardStyle}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
