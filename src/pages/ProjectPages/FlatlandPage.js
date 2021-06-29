import "../../App.css";
import { Box, Container } from "@material-ui/core";
import FlatlandGif from "../../images/flatland.gif";
import Result from "../../images/Screenshot (533).png";
import { useEffect } from "react";

function FlatlandPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Box>
      <Container maxWidth="md">
        <h1 className="intro">🚂 Flatland Challenge 🛤️</h1>
        <div className="info-container">
          <p className="info">Last updated : March, 2021</p>
          {/* eslint-disable react/jsx-no-target-blank */}
          Available at{" "}
          <a href="https://github.com/JengsHub/Flatland" target="_blank">
            https://github.com/JengsHub/Flatland
          </a>
        </div>
        <img
          className="flatland-gif"
          src={FlatlandGif}
          alt="Flatland gif"
        ></img>
        {/* eslint-disable react/jsx-no-target-blank */}
        <i className="caption">
          Credit{" "}
          <a
            href="https://www.aicrowd.com/challenges/neurips-2020-flatland-challenge"
            target="_blank"
          >
            {" "}
            AIcrowd
          </a>
        </i>
        <p className="indent profile-text">
          As quoted by AIcrowd, This challenge tackles a key problem in the
          transportation world: How to efficiently manage dense traffic on
          complex railway networks? This is a real-world problem faced by many
          transportation and logistics companies around the world such as the
          Swiss Federal Railways and Deutsche Bahn.
        </p>
        <p className="indent profile-text">
          To tackle this problem, I implemented a baseline solution using{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a
            href="https://towardsdatascience.com/a-star-a-search-algorithm-eb495fb156bb"
            target="_blank"
          >
            A* search algorithm
          </a>{" "}
          over the full state space of the environment. The idea is simple,
          carry out A* search algorithm for every train in search space. A*
          algorithm is a searching algorithm that searches for the shortest path
          between the initial and the final state. It is used in various
          applications, such as maps.
        </p>

        <iframe
          title="A star"
          className="youtube"
          src="https://www.youtube.com/embed/19h1g22hby8"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        ></iframe>
        <i className="caption">
          Visualisation of Path Finding using A* Search Algorithm
        </i>

        <p className="indent profile-text">
          With the results of the A* search Algorithm, I attempt to schedule
          their path taken by ensuring that no two trains are on the same track
          at a time step t. I have also ensure that before moving onto a train
          track, a train must ensure that the path it is taking is not of used
          by any other train to prevent any deadlock situations.
        </p>
        <img className="result" src={Result} alt="Tabulated results" />
        <i className="caption">
          Tabulated result after testing on different Grid sizes. (a, b) where a
          = Grid of a*a and b = number of trains
        </i>
        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default FlatlandPage;
