import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import logo from "../../images/dataVis.png";
import { useHistory } from "react-router-dom";

function DataVisCard() {
  const history = useHistory();
  return (
    <Card className="card">
      <CardMedia
        alt="Data Visualisation Logo"
        className="card-images blue"
        title="Data Visualisation Logo"
      >
        <img src={logo} className="logo" alt="Data Visualisation logo"></img>
      </CardMedia>
      <CardContent className="card-content">
        <h2>Data Visualisation</h2>
        <p> Using Tableau and Vega-Lite Library, I created visualisations for two different topics that enables user to easily process information.</p>
        <button className="find-out-more" onClick={() => history.push("/portfolio/projects/DataVisualisation")}>
            Find out more <ArrowRightSharpIcon className="right-arrow" fontSize='small'/>
        </button>
      </CardContent>
    </Card>
  );
}

export default DataVisCard;
