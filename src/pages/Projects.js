import "../App.css";
import { Box } from "@material-ui/core";
import TASCard from "./ProjectCards/TASCard";
import FlatlandCard from "./ProjectCards/FlatlandCard";
import HealthcareCard from "./ProjectCards/HealthcareCard";
import UsabilityCard from "./ProjectCards/UsabilityCard";
import FingerprintCard from "./ProjectCards/FingerprintCard";
import GitMonitorCard from "./ProjectCards/GitMonitorCard";
import DataVisCard from "./ProjectCards/DataVisCard";

function Projects() {
  return (
    <Box>
        <h1>My Projects</h1>
        <TASCard></TASCard>
        <FlatlandCard></FlatlandCard>
        <HealthcareCard></HealthcareCard>
        <UsabilityCard></UsabilityCard>
        <FingerprintCard></FingerprintCard>
        <GitMonitorCard></GitMonitorCard>
        <DataVisCard></DataVisCard>
        <div className="bottom"></div>
    </Box>
  );
}

export default Projects;
