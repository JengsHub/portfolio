import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import logo from "../../images/mobile-10-512.webp";
import { useHistory } from "react-router-dom";

function TASCard() {
  const history = useHistory();
  return (
    <div onClick={() => history.push("/portfolio/projects/Usability")}>
      <Card className="card">
        <CardMedia
          alt="Usability Logo"
          className="card-images orange"
          title="Usability Logo"
        >
          <img src={logo} className="logo" alt="Usability logo"></img>
        </CardMedia>
        <CardContent className="card-content">
          <h2 className="card-heading">LocalCooks Application Design</h2>
          <p className="text">
            {" "}
            With the goal of understanding usability, my team and I went through
            the process of a regular UX project to better understand the users
            needs.
            <br></br>
            <i className="click-clue"> Click to find out more.</i>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default TASCard;
