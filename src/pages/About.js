import "../App.css";
import { Box, Container, Grid } from "@material-ui/core";
import image from "../images/Malaysia.jpg";
import gif from "../images/sparkle.gif";

function About() {
  return (
    <Box>
      <Container maxWidth="md">
        <img className="mas-flag" src={image} alt="Malaysian Flag"></img>
        <img className="sparkle" src={gif} alt="sparkle gif"></img>
        <h2 className="intro">
          👋🏼 I'm an undergraduate who is currently based in Selangor, Malaysia.
        </h2>
        <div className="row">
          <div className="column">
            <h2> 👨‍💻 Programming Languages</h2>
            </div>
            <div className="column">
            <h2> 🛠️ Tools</h2>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h2> 📖 General</h2>
            </div>
            <div className="column">
            <h2> 🌐 Language</h2>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default About;
