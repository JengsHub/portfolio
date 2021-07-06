import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import logo from "../../images/git.png";
import { useHistory } from "react-router-dom";
import React from "react";

function GitMonitorCard() {
  const history = useHistory();
  return (
    <div
      onClick={() => history.push("/portfolio/projects/GitMonitoringSystem")}
    >
      <Card className="card">
        <CardMedia
          alt="GitHub Logo"
          className="card-images pink"
          title="GitHub Logo"
        >
          <img src={logo} className="git-card-logo" alt="GitHub logo"></img>
        </CardMedia>
        <CardContent className="card-content">
          <h2 className="card-heading">Git Monitoring System</h2>
          <p className="text">
            {" "}
            A system that enables users to view detailed analysis of a git
            repository.
            <br></br>
            <i className="click-clue"> Click to find out more.</i>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default GitMonitorCard;
