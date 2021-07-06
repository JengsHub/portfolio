/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";
import { Container } from "@material-ui/core";
import t1 from "../images/t1.png";
import React from "react";

function Profile() {
  return (
    <Container>
      <img className="mas-flag" src={t1} alt="Profile"></img>
      <div>
        <h1 className="intro">
          Hi, I'm <a className="name-link">Jeng Yue</a>
        </h1>
      </div>
      <div>
        <p className="profile-text">
          I'm an aspiring software engineer who is currently pursuing a degree
          in Software Engineering in Monash University Malaysia. My biggest
          advantage is probably my outgoing personality which has provided me
          with the ability to adapt and establish a stable environment for me to
          perform. Additionally, I am no stranger to software development
          processes such as {/* eslint-disable react/jsx-no-target-blank */}
          <a
            href="https://www.scrum.org/resources/what-is-scrum"
            target="_blank"
          >
            Scrum
          </a>{" "}
          and {/* eslint-disable react/jsx-no-target-blank */}
          <a href="https://www.scaledagileframework.com/" target="_blank">
            SAFe
          </a>
          .
        </p>
      </div>
    </Container>
  );
}

export default Profile;
