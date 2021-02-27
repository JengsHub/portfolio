import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import ArrowRightSharpIcon from "@material-ui/icons/ArrowRightSharp";
import logo from "../../images/healthcare.png";

function HealthcareCard() {
  return (
    <Card className="card">
      <CardMedia
        alt="Healthcare Logo"
        className="card-images"
        title="Healthcare Logo"
      >
        <img src={logo} className="logo" alt="Healthcare logo"></img>
      </CardMedia>
      <CardContent className="card-content">
        <h2>Healthcare Monitoring System</h2>
        <p>
            Developed a mobile application which allows for doctors to monitor different health related details of patients. 
        </p>
        <button className="find-out-more">
          Find out more{" "}
          <ArrowRightSharpIcon className="right-arrow" fontSize="small" />
        </button>
      </CardContent>
    </Card>
  );
}

export default HealthcareCard;
