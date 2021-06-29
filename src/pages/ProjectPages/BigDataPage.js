import "../../App.css";
import { Box, Container } from "@material-ui/core";
import { useEffect } from "react";
import rdd from "../../images/rdd_operation.png";
import apache from "../../images/apache_spark.png";
// import df from "../../images/dataframe.png";
import pipeline from "../../images/pipeline.png";
import stream from "../../images/apache_stream.png";

function BigDataPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Box>
        <Container>
          <h1 className="intro">📊 Big Data Processing 📈</h1>

          <div className="info-container">
            <p className="info">Last updated : May, 2021</p>
            {/* eslint-disable react/jsx-no-target-blank */}
            Available at{" "}
            <a
              href="https://github.com/JengsHub/BigDataProcessing"
              target="_blank"
            >
              https://github.com/JengsHub/BigDataProcessing
            </a>
          </div>
          <hr className="background"></hr>
          <img className="apache" src={apache} alt="Apache Spark logo"></img>
          <p className="indent profile-text">
            To familiarize with Apache Spark, I started by investigating and
            understanding the various opearation that can be carried out on
            Apache Spark, I employed various methods on both Resilient
            Distributed Datasets (RDD) and Dataframes over a large dataset of
            Pedestrian Count in Melbourne Australia. I have also gauged the
            performance difference between RDD and dataframes.
          </p>
          <img className="rdd" src={rdd} alt="Basic RDD operations"></img>
          <i className="caption">Basic RDD operations.</i>

          {/* <img className="dataframe" src={df} alt="Apache Spark dataframe structure."></img>
          <i className="caption">Apache Spark dataframe structure.</i> */}

          <p className="indent profile-text">
            With the conclusion drawn from the comparisons between performance
            of RDD and dataframes, I then proceeded to build various machine
            learning models to predict the pedestrian traffic. These models
            include, Logistic Regression, Decision tree and Random Forest. To
            transform, evaluate and fit the steps into an object, a Pipeline is
            used.
          </p>
          <img
            className="pipeline"
            src={pipeline}
            alt="Overall Architecture."
          ></img>
          <i className="caption">Overall Architecture.</i>

          <p className="indent profile-text">
            As I've gained more experience with Apache Spark, I attempted
            perform predictions using the machine learning model created along
            with a stream of "real-time" data using Spark Streaming and Apache
            Kafka.
          </p>

          <img
            className="pipeline"
            src={stream}
            alt="Overall Architecture for streamed data."
          ></img>
          <i className="caption">
            Overall Architecture for prediction of stream.
          </i>
          <div className="bottom"></div>
        </Container>
      </Box>
    </>
  );
}

export default BigDataPage;
