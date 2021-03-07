import "../App.css";
import { Container } from "@material-ui/core";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";

function Contact() {
  return (
    <Container maxWidth="md" className="contact-dt">
      <h1 className="email">
        <MarkunreadMailboxIcon className="email" /> jong0021@student.monash.edu
      </h1>
      <p className="text">Get in touch with me ✌️! Always down for a collaboration. </p>
    </Container>
  );
}

export default Contact;
