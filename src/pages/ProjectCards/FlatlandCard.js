import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import ArrowRightSharpIcon from "@material-ui/icons/ArrowRightSharp";
import logo from "../../images/flatland-logo.svg";
import { useHistory } from "react-router-dom";

function FlatlandCard() {
  const history = useHistory();
  return (
    <Card className="card">
      <CardMedia
        alt="Flatland Logo"
        className="card-images yellow"
        title="Flatland Logo"
      >
        <img src={logo} className="logo" alt="Flatland logo"></img>
      </CardMedia>
      <CardContent className="card-content">
        <h2>Flatland Challenge</h2>
        <p>
          {" "}
          The{" "}
          <a href="https://flatland.aicrowd.com/intro.html">
            {" "}
            Flatland Challenge
          </a>{" "}
          is a multi-train path-planning and scheduling problem on a grid world.
          With the use of A* algorithm, the goal is to schedule the trains
          without conflicts.{" "}
        </p>
        <button className="find-out-more"
                  onClick={() =>
                    history.push("/portfolio/projects/FlatlandChallenge")
                  }>
          Find out more{" "}
          <ArrowRightSharpIcon className="right-arrow" fontSize="small" />
        </button>
      </CardContent>
    </Card>
  );
}

export default FlatlandCard;
