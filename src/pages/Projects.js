import "../App.css";
import { Box } from "@material-ui/core";
import TASCard from "./ProjectCards/TASCard";
import FlatlandCard from "./ProjectCards/FlatlandCard";
import HealthcareCard from "./ProjectCards/HealthcareCard";
import UsabilityCard from "./ProjectCards/UsabilityCard";
import FingerprintCard from "./ProjectCards/FingerprintCard";
import GitMonitorCard from "./ProjectCards/GitMonitorCard";
import DataVisCard from "./ProjectCards/DataVisCard";
import { useEffect } from "react";

function Projects() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  return (
    <Box>
        <h1 className="intro">My Projects</h1>
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
