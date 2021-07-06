/* eslint-disable react-hooks/exhaustive-deps */
import "../../App.css";
import "../../about.css";
import { Box, Container } from "@material-ui/core";
import Question from "../../images/Screenshot (534).png";
import Moqup from "../../images/Screenshot (456).png";
import Persona from "../../images/Persona.png";
import Sketch from "../../images/sketch.jpg";
import React, { useEffect } from "react";
import Header from "../components/Header";

function UsabilityPage() {
  let modal, modalImg;

  useEffect(() => {
    window.scrollTo(0, 0);
    modal = document.getElementById("myModal");
    modalImg = document.getElementById("img01");
    var span = document.getElementById("close");
    span.onclick = function () {
      modal.style.display = "none";
    };
  }, []);

  const openModal = () => {
    modal.style.display = "block";
    modalImg.src = Persona;
  };

  return (
    <Box>
      <Container>
        <Header />
        <h1 className="intro">📱 LocalCooks Usability Project 🖥️</h1>
        <div className="info-container">
          <p className="info">Last updated : March, 2021</p>
        </div>

        <p className="indent profile-text">
          Everyone needs a hobby, especially during Covid-19 lockdowns. To
          better the community, we had the idea to create an application known
          as LocalCooks. The goal of the application was to inspire the local
          community to pick up cooking as a hobby and try out recipes for trendy
          food while keeping traditional recipes alive. However, designing an
          application with the spark of an idea alone is insufficient and it is
          bound to fail. Thus, we set out to understand our users needs and
          preferences.
        </p>
        <h3 className="recent-works">How it happened</h3>
        <p className="indent profile-text">
          I would say the most crucial step in designing a UI is to know the
          target users of the application first. My team and I then set out to
          gather information regarding users with the use of questionnaires.
          This could be done in various number of ways, but due to Covid-19, we
          chose to use google forms for our questionnaires.
        </p>

        {/* eslint-disable react/jsx-no-target-blank */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdVaORxnwQBx_AsfWmqV7uRZuzjpCuElpaDXxJQIiyNU3YjwA/viewform"
          target="_blank"
        >
          <img
            className="Question"
            src={Question}
            alt="Google Form Questionnaire"
          ></img>
        </a>
        <i className="caption">Google Form Questionnaire</i>
        <p className="indent profile-text">
          With the information gathered, we then review information gathered by
          colleagues and conclude similarities and differences. We then
          individually came up with user stories and personas from the
          information that we have concluded. These are a few examples of them.
        </p>
        <div className="container">
          <div className="item">
            <img
              className="Persona"
              src={Persona}
              onClick={openModal}
              alt="Persona"
            ></img>
            <i className="caption"> Persona</i>
          </div>
          <div className="item">
            <p className="profile-text">
              "As a user of the application, I want to be able to switch the
              language of the application as I like so that I can understand the
              user interface." <br></br>
              <i className="caption">- User Story 1</i>
            </p>
            <p className="profile-text">
              "As a owner of smart cooker, I want to be able to see recipes for
              smart cookers instead of normal recipes so that I can cook new
              things with my smart cooker." <br></br>
              <i className="caption">- User Story 2</i>
            </p>
          </div>
        </div>
        <div className="usability-sketch-container ">
          <div className="sketch-item">
            <p className=" profile-text">
              Now that we know our user, we individually produced some sketches
              of the application. These sketches were produced by applying some
              theories in UI design.
              <br />
              <br />
              Why sketches? They allow us to express our ideas quickly at super
              low costs. We can also decide on things with sketches before we
              move further into the project, which would save some time
            </p>
          </div>
          <div className="sketch-item">
            <img className="sketch" src={Sketch} alt="Sketch"></img>
            <i className="caption"> Example sketch</i>
          </div>
        </div>
        <div className="usability-sketch-container">
          <div className="sketch-item">
            <img className="sketch" src={Moqup} alt="Example of Mock up"></img>
          </div>
          <div className="sketch-item">
            <p className="profile-text">
              With our sketches, my team and I got together and decided on pros
              and cons of each idea. We then decided on a final sketch idea and
              proceeded to produce a high-fidelity prototype with Moqups. This
              is an example of the UI we came up with <i>(left)</i>.
            </p>
          </div>
        </div>
        <p className="indent profile-text">
          With an interactive prototype, we set out again to interview users
          with the prototype. In this evaluation, we extract crucial information
          such as how long user take to carry out tasks and how many mistakes
          were made on the prototype. <b>Receiving feedback</b> from users is a
          very crucial part of the process in UX designing. With the feedback
          received, we finished up the project after making minor modifications
          to our prototype
        </p>
        {/* Modals */}
        <div id="myModal" className="modal">
          <span className="close" id="close">
            &times;
          </span>
          <img className="modal-content" id="img01" alt="Persona" />
        </div>
        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default UsabilityPage;
