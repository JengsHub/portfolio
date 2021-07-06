import "../../App.css";
import "./contact.css";
import { Container } from "@material-ui/core";
import ContactRow from "./ContactRow";
import React from "react";

function Contact() {
  return (
    <Container maxWidth="md" className="contact-dt">
      <hr></hr>
      <ContactRow />
      <p className="in-touch">
        Get in touch with me ✌️! Always down for a collaboration.{" "}
      </p>
    </Container>
  );
}

export default Contact;
