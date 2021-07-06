import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import logo from "../../images/logofull.png";
import { useHistory } from "react-router-dom";
import React from "react";

function TASCard() {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push("/portfolio/projects/TutorAllocationSystem")}
    >
      <Card className="card">
        <CardMedia
          alt="Tutor Allocation System Logo"
          className="card-images"
          title="Tutor Allocation System Logo"
        >
          <img src={logo} className="logo" alt="TAS logo"></img>
        </CardMedia>
        <CardContent className="card-content">
          <h2 className="card-heading">Tutor Allocation System</h2>
          <p className="text">
            {" "}
            In collaboration with Monash University Australia, my team and I
            developed a system for Monash University to help automate and ease
            the process of scheduling of staff.
            <br></br>
            <i className="click-clue"> Click to find out more.</i>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default TASCard;
