import "../../App.css";
import { Box, Container } from "@material-ui/core";
import DataVis from "../../images/datavis.jpeg";
import Japan from "../../images/Picture1.jpg";
import Life from "../../images/Picture2.png";
import { useEffect } from "react";

function DataVisPage() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  })
  return (
    <>
      <Box>
        <Container maxWidth="md">
          <h1>📊 Data Visualisation 📈</h1>

          <h4 className="info-container">
            <p className="info">Last updated : March, 2021</p>
            {/* eslint-disable react/jsx-no-target-blank */}
            Available at{" "}
            <a
              href="https://github.com/JengsHub/LifeExpectancyVisualisation"
              target="_blank"
            >
              https://github.com/JengsHub/LifeExpectancyVisualisation
            </a>
          </h4>
          {/* eslint-disable react/jsx-no-target-blank */}
          <a
            href="https://towardsdatascience.com/how-data-visualization-works-12c6a4543d52"
            target="_blank"
          >
            <img
              className="DataVis"
              src={DataVis}
              alt="Data Visualisation charts"
            ></img>
          </a>
          <i className="caption">Different Types of Visualisations</i>
          <p className="indent profile-text">
            Now more than ever, it is harder for us humans to interpret data.
            This is due to the fact that the volume and variety of data are
            growing exponentially, making data hard to process even for
            conventional database management tools. That is why Data
            Visualisation is crucial. Because of the way the human brain
            processes information, using charts or graphs to visualize large
            amounts of complex data is easier than poring over spreadsheets or
            reports. Data visualization is a quick and easy way to convey
            concepts in a universal manner.
          </p>
          <div className="row">
            <div className="column">
              {/* eslint-disable react/jsx-no-target-blank */}
              <a
                href="https://public.tableau.com/views/Assignment1_15986936718370/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link"
                target="_blank"
              >
                <img
                  className="Japan"
                  src={Japan}
                  alt="Japan Visualisation"
                ></img>
              </a>
              <i className="caption">Japan as a tourism destination.</i>
            </div>
            <div className="column">
              <p className="indent center profile-text">
                With data obtained from{" "}
                <a
                  href="https://data.worldbank.org/indicator/ST.INT.ARVL"
                  target="_blank"
                >
                  {" "}
                  World Bank Data
                </a>{" "}
                and{" "}
                <a href="https://statistics.jnto.go.jp/en/" target="_blank">
                  Statistics Japan
                </a>
                , I seek to visualise{" "}
                <b className="bold">Japan as a tourism destination</b>. My
                visualisation can be read by clicking on the image on the left.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <p className="indent center profile-text">
                With data obtained from{" "}
                <a href="https://data.worldbank.org" target="_blank">
                  {" "}
                  World Bank Data
                </a>{" "}
                and{" "}
                <a
                  href="https://population.un.org/wpp2019/Download/Standard/Interpolated/"
                  target="_blank"
                >
                  United Nations Population Prospect 2019 {" "}
                </a>
                , I had visualised the{" "}
                <b className="bold">Life Expectancy of Humans</b>. My
                visualisation can be read by clicking on the image on the right.
              </p>
            </div>
            <div className="column">
              {/* eslint-disable react/jsx-no-target-blank */}
              <a
                href="https://jengshub.github.io/LifeExpectancyVisualisation/"
                target="_blank"
              >
                <img
                  className="Bubble"
                  src={Life}
                  alt="Life Expectancy Bubble Graph"
                ></img>
              </a>
              <i className="caption">Bubble Graph of Life Expectancy.</i>
            </div>
          </div>
          <div className="bottom"></div>
        </Container>
      </Box>
    </>
  );
}

export default DataVisPage;
