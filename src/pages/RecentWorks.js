import "../App.css";
import { Container } from "@material-ui/core";
import TASCard from "./ProjectCards/TASCard";
import FlatlandCard from "./ProjectCards/FlatlandCard";
import HealthcareCard from "./ProjectCards/HealthcareCard";
import ViewAll from "./components/ViewAll";

function RecentWorks() {
  return (
    <Container maxWidth="md">
      <p className="recent-works">MY RECENT PROJECTS</p>
      <TASCard></TASCard>
      <FlatlandCard></FlatlandCard>
      <HealthcareCard></HealthcareCard>
      <ViewAll></ViewAll>
    </Container>
  );
}

export default RecentWorks;
