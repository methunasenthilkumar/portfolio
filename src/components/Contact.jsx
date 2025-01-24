import React from "react";

const Contact = () => {
  const contactStyle = {
    padding: "100px 20px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "30px",
    animation: "fadeInDown 0.8s ease-in-out",
  };

  const infoStyle = {
    fontSize: "1.2rem",
    color: "#555",
    margin: "10px 0",
    lineHeight: "1.8",
  };

  const linkStyle = {
    color: "#007BFF",
    textDecoration: "none",
    fontWeight: "bold",
    marginTop: "10px",
    display: "inline-block",
    transition: "color 0.3s ease, transform 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#0056b3",
    transform: "scale(1.05)",
  };

  const containerStyle = {
    display: "inline-block",
    textAlign: "left",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
    animation: "fadeInUp 0.8s ease-in-out",
  };

  return (
    <section style={contactStyle}>
      <h2 style={headingStyle}>Contact Me</h2>
      <div style={containerStyle}>
        <p style={infoStyle}>
          <strong>Phone:</strong> +91 9345405842
        </p>
        <p style={infoStyle}>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:methuna.ms2023ai-ds@sece.ac.in"
            style={linkStyle}
            onMouseEnter={(e) => (Object.assign(e.target.style, linkHoverStyle))}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            methuna.ms2023ai-ds@sece.ac.in
          </a>
        </p>
        <p style={infoStyle}>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/methunasenthil"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => (Object.assign(e.target.style, linkHoverStyle))}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            GitHub Profile
          </a>
        </p>
        <p style={infoStyle}>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/methuna-senthilkumar-a17467276"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => (Object.assign(e.target.style, linkHoverStyle))}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
