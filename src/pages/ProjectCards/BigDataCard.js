import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import logo from "../../images/big_data.png";
import { useHistory } from "react-router-dom";
import React from "react";

function BigDataCard() {
  const history = useHistory();
  return (
    <div onClick={() => history.push("/portfolio/projects/BigDataProcessing")}>
      <Card className="card">
        <CardMedia
          alt="Big Data Logo"
          className="card-images blue"
          title="Big Data Logo"
        >
          <img src={logo} className="logo" alt="Big Data logo"></img>
        </CardMedia>
        <CardContent className="card-content">
          <h2 className="card-heading">Big Data Processing</h2>
          <p className="text">
            {" "}
            By manoeuvering the latest big data technologies such as Apache
            Spark, Spark Streaming and Apache Kafka, I set out to explore
            parallel and distributed algorithm concepts along with machine
            learning for big data.
            <br></br>
            <i className="click-clue"> Click to find out more.</i>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default BigDataCard;
