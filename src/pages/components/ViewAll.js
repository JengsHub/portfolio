import "../../App.css";
import { Container } from "@material-ui/core";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import { useHistory } from "react-router-dom";
import React from "react";

function ViewAll() {
  const history = useHistory();
  return (
    <Container>
      <div className="button-wrapper">
        <button
          className="view-all-projects find-out-more"
          onClick={() => history.push("/portfolio/projects")}
        >
          View All Projects{" "}
          <ViewCarouselIcon
            className="view-all-icon"
            style={{ fontSize: "calc(20px + 0.7vw)" }}
          />
        </button>
      </div>
    </Container>
  );
}

export default ViewAll;
