import "../../App.css";
import { Box, Container } from "@material-ui/core";
import { useEffect } from "react";
import r from "../../images/r_prog_lang.png";
import kdd from "../../images/kdd.png";
import roc from "../../images/ROC.png";

function DataAnalyticsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Box>
        <Container>
          <h1 className="intro">📊 Data Analytics 📈</h1>

          <div className="info-container">
            <p className="info">Last updated : May, 2021</p>
            {/* eslint-disable react/jsx-no-target-blank */}
            Available at{" "}
            <a href="https://github.com/JengsHub/DataAnalytics" target="_blank">
              https://github.com/JengsHub/DataAnalytics
            </a>
          </div>
          <hr className="background"></hr>
          <img className="r" src={r} alt="r Programming Language Logo"></img>
          <p className="indent profile-text">
            By using R programming language and RStudio environment, the goal
            was to analyse the activity, language use and social interactions in
            an-online community. To familiarise myself with R and RStudio, I
            started off by conducting analysis over a relatively small dataset.
            The overall steps includes understanding and pre-processing the
            dataset, analyzing dataset and reflection on how the investigation
            went.
          </p>
          <img className="kdd" src={kdd} alt="KDD"></img>
          <i className="caption">KDD Data Science Methodology.</i>

          <p className="indent profile-text">
            The figure above is an overview of the Data Science Methodology that
            I have applied while conducting analysis on the dataset. The report
            that I have written can be found
            {/* eslint-disable react/jsx-no-target-blank */}
            <a href="s" target="_blank">
              {" "}
              here
            </a>
            . With the above mentioned Data Science Methodology applied, I then
            proceeded to explore and learn on implementing classification models
            with R and RStudio. The classification models I have explored on are
            Decision Tree, Naive Bayes, Bagging, Boosting and Random Forest.
          </p>

          <p className="indent profile-text">
            The goal was to predict whether or not the weather would be cloudy
            tomorrow. The plot below shows the{" "}
            {/* eslint-disable react/jsx-no-target-blank */}
            <a
              href="https://en.wikipedia.org/wiki/Receiver_operating_characteristic#:~:text=A%20receiver%20operating%20characteristic%20curve,which%20led%20to%20its%20name."
              target="_blank"
            >
              {" "}
              ROC curve
            </a>{" "}
            for each of the binary classifiers I have mentioned above along with
            attempted improvements of certain classifiers.
          </p>
          <img className="roc" src={roc} alt="ROC plot"></img>
          <i className="caption">
            ROC Curve of different classification models.
          </i>

          <div className="bottom"></div>
        </Container>
      </Box>
    </>
  );
}

export default DataAnalyticsPage;
