import "../../App.css";
import { Container } from "@material-ui/core";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import { useHistory } from "react-router-dom";

function ViewAll() {
  const history = useHistory();
  return (
    <Container maxWidth="md">
      <div className="button-wrapper">
        <button
          className="view-all-projects find-out-more"
          onClick={() => history.push("/projects")}
        >
          View All Projects <ViewCarouselIcon className="view-all-icon" />
        </button>
      </div>
    </Container>
  );
}

export default ViewAll;
