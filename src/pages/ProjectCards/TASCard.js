import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import ArrowRightSharpIcon from "@material-ui/icons/ArrowRightSharp";
import logo from "../../images/logofull.png";
import { useHistory } from "react-router-dom";

function TASCard() {
  const history = useHistory();
  return (
    <Card className="card">
      <CardMedia
        alt="Tutor Allocation System Logo"
        className="card-images"
        title="Tutor Allocation System Logo"
      >
        <img src={logo} className="logo" alt="TAS logo"></img>
      </CardMedia>
      <CardContent className="card-content">
        <h2>Tutor Allocation System</h2>
        <p>
          {" "}
          In collaboration with Monash University Australia, we developed a
          system for Monash University to help automate and ease the process of
          scheduling of staff for classes.
        </p>
        <button
          className="find-out-more"
          onClick={() =>
            history.push("/portfolio/projects/TutorAllocationSystem")
          }
        >
          Find out more{" "}
          <ArrowRightSharpIcon className="right-arrow" fontSize="small" />
        </button>
      </CardContent>
    </Card>
  );
}

export default TASCard;
