import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import logo from "../../images/dataVis.png";
import { useHistory } from "react-router-dom";

function DataVisCard() {
  const history = useHistory();
  return (
    <div onClick={() => history.push("/portfolio/projects/DataVisualisation")}>
          <Card className="card">
      <CardMedia
        alt="Data Visualisation Logo"
        className="card-images blue"
        title="Data Visualisation Logo"
      >
        <img src={logo} className="logo" alt="Data Visualisation logo"></img>
      </CardMedia>
      <CardContent className="card-content">
        <h2 className="card-heading">Data Visualisation</h2>
        <p className="text">
          {" "}
          Using Tableau and Vega-Lite Library, I created visualisations for two
          different topics that enables user to easily process information.
          <i className="click-clue"> Click to find out more.</i>
        </p>
      </CardContent>
    </Card>
    </div>
  );
}

export default DataVisCard;
