import "../App.css";
import "../about.css";
import { Box, Container } from "@material-ui/core";
import image from "../images/Malaysia.jpg";
import Contact from "./Contact/Contact";
import React from "react";
// import gif from "../images/sparkle.gif";

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
    "R",
  ];
  const tool_n_frame = [
    "GitHub",
    "Express",
    "React, React Native",
    "Flutter",
    "Android Studio",
    "Postman",
    "PostgreSQL",
    "Apache Spark",
    "Lucid Charts",
    "Amazon Web Services",
    "Tableau",
  ];
  const general = [
    "Web Development",
    "Mobile Application Development",
    "Product Design",
    "Software Modelling",
    "Database Modelling",
    "Artificial Intelligence",
  ];
  const languages = ["English", "Mandarin", "Malay"];

  return (
    <Box>
      <Container maxWidth="md">
        <img className="mas-flag" src={image} alt="Malaysian Flag"></img>
        <h2 className="intro">
          👋🏼 I'm an undergraduate who is currently based in Selangor, Malaysia.
        </h2>
        <p className="profile-text">
          My Passion is currently in full-stack web/app development, but I do
          not shy away from adversity. I enjoy collaborative work as I am at a
          point in my life where I still have so much to learn from others.
          Outside of coding, music 🎶 and sports ⚽ are my go-tos, they impart a
          sense of comfort onto me. Listed below are more information about me.
          Feel free to get in contact with me and let's chat!!
        </p>
        <div className="container">
          <div className="item">
            <h2 className="item-list-header"> 👨‍💻 Programming Languages</h2>
            {prog_lang.sort().map((items, i) => (
              <p className="list-1" key={i}>
                - {items}
              </p>
            ))}
          </div>
          <div className="item">
            <h2 className="item-list-header"> 🛠️ Tools and Frameworks</h2>
            {tool_n_frame.sort().map((items, i) => (
              <p className="list-1" key={i}>
                - {items}
              </p>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="item">
            <h2 className="item-list-header"> 📖 General</h2>
            {general.sort().map((items, i) => (
              <p className="list-1" key={i}>
                - {items}
              </p>
            ))}
          </div>
          <div className="item">
            <h2 className="item-list-header"> 🌐 Language</h2>
            {languages.sort().map((items, i) => (
              <p className="list-1" key={i}>
                - {items}
              </p>
            ))}
          </div>
        </div>
      </Container>
      <Contact></Contact>
    </Box>
  );
}
export default About;
