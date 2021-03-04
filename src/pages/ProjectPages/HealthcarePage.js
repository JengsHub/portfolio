import "../../App.css";
import { Box, Container } from "@material-ui/core";
import FHIR from "../../images/FHIR.png";
import Dart from "../../images/dart.svg";
import AS from "../../images/android studio.svg";
import flutter from "../../images/flutter.png";
import UML from "../../images/HealthUML.png";
import Cholesterol from "../../images/cholesterol.jpg";
import BP from "../../images/BloodPressure.jpg";
import main from "../../images/mainApp.jpg";
import { useEffect } from "react";

function HealthcarePage() {
  let modal, modalImg;

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
    modal = document.getElementById("myModal");
    // eslint-disable-next-line
    modalImg = document.getElementById("img01");
    // eslint-disable-next-line
    var span = document.getElementById("close");
    span.onclick = function () {
      modal.style.display = "none";
    };
  }, []);

  const openModal = () => {
    modal.style.display = "block";
    modalImg.src = UML;
  };

  return (
    <Box>
      <Container maxWidth="md">
        <h1>👨‍⚕️ Healthcare Monitoring System 👩‍⚕️</h1>
        <h4 className="info-container">
          <p className="info">Last updated : March, 2021</p>
          {/* eslint-disable react/jsx-no-target-blank */}
          Available at{" "}
          <a
            href="https://github.com/JengsHub/TutorAllocationSystem"
            target="_blank"
          >
            CHANGE HERE
          </a>
        </h4>
        <img className="git-logo" src={FHIR} alt="FHIR logo"></img>
        <p className="indent profile-text">
          {/* eslint-disable react/jsx-no-target-blank */}
          With the use of{" "}
          <a href="https://www.hl7.org/fhir/overview.html" target="_blank">
            Fast Healthcare Interoperability Resources 1 (FHIR)
          </a>
          , the goal was to develop an application that helps health
          practitioners monitor the total cholesterol level of their patient.
        </p>
        <div className="row logos">
          <div className="column-3">
            <img
              className="logo-flutter"
              src={flutter}
              alt="Flutter logo"
            ></img>
          </div>
          <div className="column-3">
            <img
              className="logo-flutter"
              src={AS}
              alt="Android Studio logo"
            ></img>
          </div>
          <div className="column-3">
            <img className="logo-flutter" src={Dart} alt="Dart logo"></img>
          </div>
        </div>
        <p className="indent profile-text">
          {/* eslint-disable react/jsx-no-target-blank */}
          The application was built using{" "}
          <a
            href="https://flutter.dev/?gclid=Cj0KCQiAhP2BBhDdARIsAJEzXlFyNuxtKNZBRwVGncFd8JUTUJ8SE7HnWVXbhcJx7FrTAlSEdudSY8oaApW2EALw_wcB&gclsrc=aw.ds"
            target="_blank"
          >
            Flutter SDK
          </a>{" "}
          along with{" "}
          <a href="https://developer.android.com/studio" target="_blank">
            {" "}
            Android Studio
          </a>{" "}
          and the Programming Language{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a href="https://dart.dev/">Dart</a> that are usually used to code
          Flutter apps. The project was started from scratch. Thus the first
          step is to make use of the UML to design conceptual class diagrams.
        </p>
        <img
          className="conceptual-diagram"
          onClick={openModal}
          src={UML}
          alt="UML"
        ></img>
        <i className="caption"> Conceptual Class Diagram</i>
        <p className="indent profile-text">
          Subsequently, development of an interactive and informative interface
          began. This allows health practitioners clearly view and identify
          health aspects of monitored patient. Health practitioners were also
          able to specify how frequently they want the records to be updated.
          Because this application is built as a mobile application, persistent
          storage of a mobile phone is utilized to store retrieved medical
          records to minimize the server load and imporve app performance. With
          the use of machine learning technique known as{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a
            href="https://en.wikipedia.org/wiki/Random_forest#:~:text=Random%20forests%20or%20random%20decision,average%20prediction%20(regression)%20of%20the"
            target="blank"
          >
            {" "}
            Random Forest Classification
          </a>
          , the application also managed to predict the potential factors
          contributing to high cholesterol.
        </p>
        <div className="row logos">
          <div className="column-3">
            <img
              className="app-ss"
              src={main}
              alt="Application frontpage"
            ></img>
            <i className="caption"> Main Page</i>
          </div>
          <div className="column-3">
            <img
              className="app-ss"
              src={Cholesterol}
              alt="Cholestrol Page"
            ></img>
            <i className="caption"> Cholesterol Detail Page</i>
          </div>
          <div className="column-3">
            <img className="app-ss" src={BP} alt="Blood Pressure Page"></img>
            <i className="caption"> Blood Pressure Detail Page</i>
          </div>
        </div>

        {/*Modal*/}
        <div id="myModal" className="modal">
          <span className="close" id="close">
            &times;
          </span>
          <img
            className="modal-content"
            id="img01"
            alt="conceptual class diagram"
          />
        </div>
        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default HealthcarePage;
