import "../../App.css";
import { Card, CardContent } from "@material-ui/core";
import logo from "../../images/healthcare.png";
import { useHistory } from "react-router-dom";
import React from "react";

function HealthcareCard() {
  const history = useHistory();
  return (
    <div
      onClick={() =>
        history.push("/portfolio/projects/HealthcareMonitoringSystem")
      }
    >
      <Card className="card">
        <div className="card-images green">
          <img src={logo} className="logo" alt="Healthcare logo"></img>
        </div>
        <CardContent className="card-content">
          <h2 className="card-heading">Healthcare Monitoring System</h2>
          <p className="text">
            Developed a mobile application which allows for doctors to monitor
            different health related details of patients.
            <br></br>
            <i className="click-clue"> Click to find out more.</i>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default HealthcareCard;
