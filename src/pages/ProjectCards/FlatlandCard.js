import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import logo from "../../images/flatland-logo.svg";
import { useHistory } from "react-router-dom";

function FlatlandCard() {
  const history = useHistory();
  return (
    <div onClick={() =>
      history.push("/portfolio/projects/FlatlandChallenge")
    }>
      <Card className="card">
        <CardMedia
          alt="Flatland Logo"
          className="card-images yellow"
          title="Flatland Logo"
        >
          <img src={logo} className="logo" alt="Flatland logo"></img>
        </CardMedia>
        <CardContent className="card-content">
          <h2 className="card-heading">Flatland Challenge</h2>
          <p className="text">
            {" "}
            The {/* eslint-disable react/jsx-no-target-blank */}
            <a href="https://flatland.aicrowd.com/intro.html" target="_blank">
              {" "}
              Flatland Challenge
            </a>{" "}
            is a multi-train path-planning and scheduling problem on a grid
            world. With the use of A* algorithm, the goal is to schedule the
            trains without conflicts.{" "} <i className="click-clue"> Click to find out more.</i>
          </p>
          
        </CardContent>
      </Card>
    </div>
  );
}

export default FlatlandCard;
