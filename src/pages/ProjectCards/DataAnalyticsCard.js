import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import logo from "../../images/data_analytics.png";
import { useHistory } from "react-router-dom";

function DataAnalyticsCard() {
  const history = useHistory();
  return (
    <div onClick={() => history.push("/portfolio/projects/DataAnalytics")}>
      <Card className="card">
        <CardMedia
          alt="Data Analytics Logo"
          className="card-images yellow"
          title="Data Analytics Logo"
        >
          <img src={logo} className="logo" alt="Data Analytics logo"></img>
        </CardMedia>
        <CardContent className="card-content">
          <h2 className="card-heading">Data Analytics</h2>
          <p className="text">
            {" "}
            Analysing data sets using a range of statistical, graphical and
            machine-learning techniques with the help of R statisTical
            programming language and RStudio environment.
            <br></br>
            <i className="click-clue"> Click to find out more.</i>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default DataAnalyticsCard;
