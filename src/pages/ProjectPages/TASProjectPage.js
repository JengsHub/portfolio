import "../../App.css";
import { Box, Container } from "@material-ui/core";
import safeLogo from "../../images/Safe.png";
import TASlogo from "../../images/TAS-logofull.png";
import UML from "../../images/Conceptual Model - Jeng Yue.png";
import DbDraft from "../../images/DatabaseDraft.png";
import { useEffect } from "react";

function TASProjectPage() {
  let modal, modalImg, DBmodal, DBmodalImg;

  useEffect(() => {
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
  }, []);

  const openModal = () => {
    modal.style.display = "block";
    modalImg.src = UML;
  };

  const openDBModal = () => {
    DBmodal.style.display = "block";
    DBmodalImg.src = DbDraft;
  };

  return (
    <Box>
      <Container maxWidth="md">
        <h1>👨‍🏫 Tutor Allocation Project 👩‍🏫</h1>
        <img className="TAS-logo" src={TASlogo} alt="TAS logo"></img>
        <p className="indent">
          This was a collaborative effort from two teams, one based in Malaysia
          and the other in Australia. The goal here was to create a system to
          assist with assigning tutors to classes for Monash University
          Australia. Prior to this project, the process of allocating tutors
          were "troublsome" per se.
          <br></br>
          <br></br>
        </p>
        <img className="safe-logo" src={safeLogo} alt="SAFe logo"></img>
        <p className="indent">
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
        <p className="indent">
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
        <p className="indent">
          With the Class Diagram done, we moved on to decide the framework and
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


        {/* Modals */}
        <div id="myModal" className="modal">
          <span className="close" id="close">&times;</span>
          <img
            className="modal-content"
            id="img01"
            alt="conceptual class diagram"
          />
        </div>
        <div id="myDBModal" className="modal">
          <span className="close" id="DBclose">&times;</span>
          <img
            className="modal-content"
            id="DBimg01"
            alt="Database Modal"
          />
        </div>
        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default TASProjectPage;
