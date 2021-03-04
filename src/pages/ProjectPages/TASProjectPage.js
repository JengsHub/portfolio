import "../../App.css";
import { Box, Container } from "@material-ui/core";
import safeLogo from "../../images/Safe.png";
import TASlogo from "../../images/TAS-logofull.png";
import UML from "../../images/Conceptual Model - Jeng Yue.png";
import DbDraft from "../../images/DatabaseDraft.png";
import SS1 from "../../images/Screenshot (527).png";
import SS2 from "../../images/Screenshot (528).png";
import SS3 from "../../images/Screenshot (529).png";
import { useEffect } from "react";

function TASProjectPage() {
  let modal,
    modalImg,
    DBmodal,
    DBmodalImg,
    SSmodal1,
    SSmodalImg1,
    SSmodal2,
    SSmodalImg2,
    SSmodal3,
    SSmodalImg3;

  useEffect(() => {
    window.scrollTo(0, 0)
    //TODO: IMPROVE MODAL LOGIC

    // eslint-disable-next-line
    modal = document.getElementById("myModal");
    // eslint-disable-next-line
    modalImg = document.getElementById("img01");
    // eslint-disable-next-line
    var span = document.getElementById("close");
    span.onclick = function () {
      modal.style.display = "none";
    };

    //Database Modal
    // eslint-disable-next-line
    DBmodal = document.getElementById("myDBModal");
    // eslint-disable-next-line
    DBmodalImg = document.getElementById("DBimg01");
    // eslint-disable-next-line
    var DBspan = document.getElementById("DBclose");
    DBspan.onclick = function () {
      DBmodal.style.display = "none";
    };

    //Screenshot modals
    // eslint-disable-next-line
    SSmodal1 = document.getElementById("mySSModal1");
    // eslint-disable-next-line
    SSmodalImg1 = document.getElementById("SSimg01");
    // eslint-disable-next-line
    var SSspan = document.getElementById("SS1close");
    SSspan.onclick = function () {
      SSmodal1.style.display = "none";
    };

    //Screenshot2 modals
    // eslint-disable-next-line
    SSmodal2 = document.getElementById("mySSModal2");
    // eslint-disable-next-line
    SSmodalImg2 = document.getElementById("SSimg02");
    // eslint-disable-next-line
    var SSspan2 = document.getElementById("SS2close");
    SSspan2.onclick = function () {
      SSmodal2.style.display = "none";
    };

    //Screenshot3 modals
    // eslint-disable-next-line
    SSmodal3 = document.getElementById("mySSModal3");
    // eslint-disable-next-line
    SSmodalImg3 = document.getElementById("SSimg03");
    // eslint-disable-next-line
    var SSspan3 = document.getElementById("SS3close");
    SSspan3.onclick = function () {
      SSmodal3.style.display = "none";
    };
  }, []);

  const openModal = () => {
    modal.style.display = "block";
    modalImg.src = UML;
  };

  const openDBModal = () => {
    DBmodal.style.display = "block";
    DBmodalImg.src = DbDraft;
  };

  const openSS1Modal = () => {
    DBmodal.style.display = "block";
    DBmodalImg.src = SS1;
  };

  const openSS2Modal = () => {
    DBmodal.style.display = "block";
    DBmodalImg.src = SS2;
  };

  const openSS3Modal = () => {
    DBmodal.style.display = "block";
    DBmodalImg.src = SS3;
  };

  return (
    <Box>
      <Container maxWidth="md">
        <h1>👨‍🏫 Tutor Allocation Project 👩‍🏫</h1>

        <h4 className="info-container"> 
          <p className="info">Last updated : March, 2021</p>
          {/* eslint-disable react/jsx-no-target-blank */}
          Available at{" "}
          <a
            href="https://github.com/JengsHub/TutorAllocationSystem"
            target="_blank"
          >
            https://github.com/JengsHub/TutorAllocationSystem
          </a>
        </h4>
        <img className="TAS-logo" src={TASlogo} alt="TAS logo"></img>
        <p className="indent profile-text">
          This was a collaborative effort from two teams, one based in Malaysia
          and the other in Australia. The goal here was to create a system to
          assist with assigning tutors to classes for Monash University
          Australia. Prior to this project, the process of allocating tutors
          were "troublsome" per se.
          <br></br>
          <br></br>
        </p>
        <img className="safe-logo" src={safeLogo} alt="SAFe logo"></img>
        <p className="indent profile-text">
          My role in this project was a Product Manager as part of the{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a
            href="https://www.scaledagileframework.com/product-and-solution-management/"
            target="_blank"
          >
            Product Management Team
          </a>{" "}
          in a Scaled Agile Framework. Responsibility of my role included{" "}
          <strong className="bold">
            {" "}
            scheduling and holding meetings with stakeholders, develop Product
            Increment Roadmaps, manage and prioritize application features,
            ensuring product completeness
          </strong>{" "}
          and much more.
          <br></br>
          <br></br>
        </p>
        <p className="indent profile-text">
          This project was started from scratch. Therefore the first meeting
          with our stakeholders were important for the Product Management Team
          to nail the product vision statement by understanding the needs and
          requirements for the application. We had also come up with a
          conceptual class diagram that consists of important domain concepts.
          Below is an example of the conceptual class diagram we came up with.
        </p>
        <img
          className="conceptual-diagram"
          onClick={openModal}
          src={UML}
          alt="UML diagram"
        ></img>
        <i className="caption">Conceptual UML Class Diagram</i>
        <p className="indent profile-text">
          With the Class Diagram done, we then had to decide the framework and
          tools we will be using for the project. We decided its best to utilize
          a{" "}
          <a href="https://www.geeksforgeeks.org/what-is-pern-stack/">
            {" "}
            PERN stack
          </a>{" "}
          after some discussions. With that, we started our next phase of the
          project which is Database Modelling. Below is an example of the
          Database Model.
        </p>

        <img
          className="conceptual-diagram"
          onClick={openDBModal}
          src={DbDraft}
          alt="Database Modal"
        ></img>
        <i className="caption">Initial Database Modal</i>
        <b></b>
        <b></b>
        <p className="indent profile-text">
          {/* eslint-disable react/jsx-no-target-blank */}
          Through iterative{" "}
          <a
            href="https://www.scaledagileframework.com/program-increment/"
            target="_blank"
          >
            Product Increments
          </a>
          , my team and I had designed, coded and tested the application
          consistently. The application frontend was deployed using{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a href="https://www.heroku.com/" target="_blank">
            {" "}
            heroku
          </a>{" "}
          while the backend was hosted using{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a href="https://aws.amazon.com/lambda/" target="blank">
            AWS Lambda
          </a>
          . The project can be viewed{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a
            href="https://github.com/JengsHub/TutorAllocationSystem/tree/master"
            target="_blank"
          >
            here
          </a>
          . Below are some of the screenshots of the Tutor Allocation System we
          had crafted.
        </p>
        <img
          className="conceptual-diagram"
          onClick={openSS1Modal}
          src={SS1}
          alt="Screenshot 1"
        ></img>
        <i className="caption">Unit Offering Screenshot</i>
        <img
          className="conceptual-diagram"
          onClick={openSS2Modal}
          src={SS2}
          alt="Screenshot 2"
        ></img>
        <i className="caption">File Uploader Screenshot</i>
        <img
          className="conceptual-diagram"
          onClick={openSS3Modal}
          src={SS3}
          alt="Screenshot 3"
        ></img>
        <i className="caption">Role Modification Screenshot</i>

        {/* Modals */}
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
        <div id="myDBModal" className="modal">
          <span className="close" id="DBclose">
            &times;
          </span>
          <img className="modal-content" id="DBimg01" alt="Database Modal" />
        </div>
        <div id="mySSModal1" className="modal">
          <span className="close" id="SS1close">
            &times;
          </span>
          <img className="modal-content" id="SSimg01" alt="Screenshot1" />
        </div>
        <div id="mySSModal2" className="modal">
          <span className="close" id="SS2close">
            &times;
          </span>
          <img className="modal-content" id="SSimg02" alt="Screenshot3" />
        </div>
        <div id="mySSModal3" className="modal">
          <span className="close" id="SS3close">
            &times;
          </span>
          <img className="modal-content" id="SSimg03" alt="Screenshot3" />
        </div>
        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default TASProjectPage;
