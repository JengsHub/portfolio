import "./contact.css";
import { Container } from "@material-ui/core";
import Mail from "@material-ui/icons/Mail";
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";

function Contact() {
  function openLinked() {
    window.open("", "_blank");
  }

  function openGitHub() {
    window.open("", "_blank");
  }

  function openMail() {
    window.open("", "_blank");
  }
  return (
    <Container className="contact-row">
      <IconButton onClick={openMail}>
        <Mail style={{ color: "black" }}></Mail>
      </IconButton>
      <IconButton onClick={openLinked}>
        <LinkedIn style={{ color: "black" }}></LinkedIn>
      </IconButton>
      <IconButton onClick={openGitHub}>
        <GitHub style={{ color: "black" }}></GitHub>
      </IconButton>
    </Container>
  );
}

export default Contact;
