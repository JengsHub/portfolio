import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import ArrowRightSharpIcon from "@material-ui/icons/ArrowRightSharp";
import logo from "../../images/mobile-10-512.webp";
import { useHistory } from "react-router-dom";

function TASCard() {
  const history = useHistory();
  return (
    <Card className="card">
      <CardMedia
        alt="Usability Logo"
        className="card-images orange"
        title="Usability Logo"
      >
        <img src={logo} className="logo" alt="Usability logo"></img>
      </CardMedia>
      <CardContent className="card-content">
        <h2>LocalCooks Application Design</h2>
        <p>
          {" "}
          With the goal of understanding usability, my team and I went through
          the process of a regular UX project to better understand the users
          needs.
        </p>
        <button
          className="find-out-more"
          onClick={() => history.push("/portfolio/projects/Usability")}
        >
          Find out more{" "}
          <ArrowRightSharpIcon className="right-arrow" fontSize="small" />
        </button>
      </CardContent>
    </Card>
  );
}

export default TASCard;
