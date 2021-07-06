import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import logo from "../../images/fingerprint.png";
import { useHistory } from "react-router-dom";
import React from "react";

function FingerprintCard() {
  const history = useHistory();
  return (
    <div onClick={() => history.push("/portfolio/projects/Fingerprint")}>
      <Card className="card">
        <CardMedia
          alt="Fingerprint Logo"
          className="card-images peach"
          title="Fingerprint Logo"
        >
          <img src={logo} className="logo" alt="Fingerprint logo"></img>
        </CardMedia>
        <CardContent className="card-content">
          <h2 className="card-heading">Fingerprint Recognition</h2>
          <p className="text">
            {" "}
            With the reference of research papers published online, I developed
            a fingerprint recognition system using distinct fingerprint
            minutiae.
            <br></br>
            <i className="click-clue"> Click to find out more.</i>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default FingerprintCard;
