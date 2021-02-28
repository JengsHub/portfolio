import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import ArrowRightSharpIcon from "@material-ui/icons/ArrowRightSharp";
import logo from "../../images/healthcare.png";
import { useHistory } from "react-router-dom";

function HealthcareCard() {
  const history = useHistory();
  return (
    <Card className="card">
      <CardMedia
        alt="Healthcare Logo"
        className="card-images green"
        title="Healthcare Logo"
      >
        <img src={logo} className="logo" alt="Healthcare logo"></img>
      </CardMedia>
      <CardContent className="card-content">
        <h2>Healthcare Monitoring System</h2>
        <p>
          Developed a mobile application which allows for doctors to monitor
          different health related details of patients.
        </p>
        <button
          className="find-out-more"
          onClick={() =>
            history.push("/portfolio/projects/HealthcareMonitoringSystem")
          }
        >
          Find out more{" "}
          <ArrowRightSharpIcon className="right-arrow" fontSize="small" />
        </button>
      </CardContent>
    </Card>
  );
}

export default HealthcareCard;
