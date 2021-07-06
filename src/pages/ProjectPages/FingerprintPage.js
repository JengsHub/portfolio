import "../../App.css";
import { Box, Container } from "@material-ui/core";
import Finger from "../../images/history-of-biometrics-2-500x278.png";
import Result1 from "../../images/Screenshot (531).png";
import Result2 from "../../images/Screenshot (532).png";
import Methodology from "../../images/Screenshot (530).png";
import React, { useEffect } from "react";
import Header from "../components/Header";

function FingerprintPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Box>
      <Container maxWidth="md">
        <Header/>
        <h1 className="intro">🕵️‍♀️ Fingerprint Recognition 🕵️</h1>
        <div className="info-container">
          <p className="info">Last updated : March, 2021</p>
          {/* eslint-disable react/jsx-no-target-blank */}
          Available at{" "}
          <a
            href="https://github.com/JengsHub/FingerprintRecognition"
            target="_blank"
          >
            https://github.com/JengsHub/FingerprintRecognition
          </a>
        </div>
        <img
          className="Fingerprint-History"
          src={Finger}
          alt="History of Biometrics"
        ></img>
        <p className="indent profile-text">
          Fingerprint recognition system is undoubtedly one of the most
          favourable validation systems being used nowadays in industries that
          demands infallible security and authentication. The present text
          explores the typical methods involved in achieving a software-based
          fingerprint recognition system that uses minutiae extraction to
          distinguish a variety of fingerprints. <br />
        </p>
        <p className="indent profile-text">
          Based on readings from research papers, this is the overall
          methodology that we had come up with<i>(pic attached below)</i>.
        </p>
        <img
          className="Methodology"
          src={Methodology}
          alt="Methodology used"
        ></img>
        <i className="caption">Methodology Used</i>
        <p className="indent profile-text">
          {" "}
          This methodology includes steps to preprocess original fingerprint
          image to ensure that fingerprint features are as clear as possible
          before attempting to extarct them.
        </p>
        <p className="indent profile-text">
          For testing, fingerprint images were obtained from sources available
          online such as {/* eslint-disable react/jsx-no-target-blank */}
          <a
            href="http://www.advancedsourcecode.com/PNGfingerprint.rar"
            target="_blank"
          >
            here
          </a>{" "}
          and {/* eslint-disable react/jsx-no-target-blank */}
          <a
            href="http://bias.csr.unibo.it/fvc2004/download.asp"
            target="_blank"
          >
            here
          </a>
          . In order to try and match an input fingerprint back to its owner, we
          first need a database of fingerprints. Hence, we created a small
          database by collecting information from fingerprints. The information
          collected for each fingerprint is the coordinates of feature points
          and its corresponding type.There are 24 fingerprints in the database,
          which comprises fingerprints from four individuals, where each
          individual has six fingerprints taken(scanned) in different manners.
        </p>
        <p className="indent profile-text">
          Overall, we managed to match the fingerprint back to its owner with a
          relative high matching score in some cases<i>(pic attached below)</i>.
        </p>
        <img
          className="Fingerprint-History"
          src={Result1}
          alt="Recoginition Result 1"
        ></img>
        <i className="caption">
          Matching results of 2 fingerprint images of person 1.
        </i>
        <img
          className="Fingerprint-History"
          src={Result2}
          alt="Recoginition Result 2"
        ></img>
        <i className="caption">
          Matching results of 2 fingerprint images of person 6.
        </i>
        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default FingerprintPage;
