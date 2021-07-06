import "./contact.css";
import Mail from "@material-ui/icons/Mail";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import React from "react";
import IconButton from "@material-ui/core/IconButton";

function Contact() {
  function openLinked() {
    window.open(
      "https://www.linkedin.com/in/jeng-yue-ong-a29a39216/",
      "_blank"
    );
  }

  function openGitHub() {
    window.open("https://github.com/JengsHub", "_blank");
  }

  function openMail() {
    window.open("mailto:jengyue96@gmail.com", "_blank");
  }
  return (
    <div className="contact-row">
      <IconButton onClick={openMail}>
        <Mail style={{ color: "black", fontSize: "calc(20px + 0.7vw)" }}></Mail>
      </IconButton>
      <IconButton onClick={openLinked}>
        <LinkedIn
          style={{ color: "black", fontSize: "calc(20px + 0.7vw)" }}
        ></LinkedIn>
      </IconButton>
      <IconButton onClick={openGitHub}>
        <GitHub
          style={{ color: "black", fontSize: "calc(20px + 0.7vw)" }}
        ></GitHub>
      </IconButton>
    </div>
  );
}

export default Contact;
