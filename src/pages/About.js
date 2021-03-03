import "../App.css";
import { Box, Container } from "@material-ui/core";
import image from "../images/Malaysia.jpg";
import gif from "../images/sparkle.gif";

function About() {
  const prog_lang = [
    "Python",
    "Java",
    "Javascript",
    "TypeScript",
    "C",
    "Matlab",
    "HTML/CSS",
    "Dart",
    "SQL",
  ];
  const tool_n_frame = [
    "GitHub",
    "Express",
    "React",
    "Flutter",
    "Android Studio",
    "Postman",
    "PostgreSQL",
    "Lucid Charts",
  ];
  const general = [
    "Web Development",
    "Mobile Application Development",
    "Product Design",
    "Software Modelling",
    "Database Modelling"
  ];
  const languages = ["English", "Mandarin", "Malay"];
  return (
    <Box>
      <Container maxWidth="md">
        <img className="mas-flag" src={image} alt="Malaysian Flag"></img>
        <img className="sparkle" src={gif} alt="sparkle gif"></img>
        <h2 className="intro">
          👋🏼 I'm an undergraduate who is currently based in Selangor, Malaysia.
        </h2>
        <p className="profile-text">
          My Passsion is currently in front-end web development, but I do not
          shy away from adversity. I enjoy collaborative work as I am at the
          stage of life where I still have so much to learn from others. Outside
          of coding, music 🎶 and sports ⚽ are my go-tos, they impart a sense
          of comfort onto me. Feel free to get in contact with me and let's
          chat!!
        </p>
        <div className="row">
          <div className="column">
            <h2> 👨‍💻 Programming Languages</h2>
            <ul>
              {prog_lang.map((items, i) => (
                <li key={i}>{items}</li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h2> 🛠️ Tools and Frameworks</h2>
            <ul>
              {tool_n_frame.map((items, i) => (
                <li key={i}>{items}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h2> 📖 General</h2>
            <ul>
              {general.map((items, i) => (
                <li key={i}>{items}</li>
              ))}
            </ul>
          </div>
          <div className="column">
            <h2> 🌐 Language</h2>
            <ul>
              {languages.map((items, i) => (
                <li key={i}>{items}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default About;
