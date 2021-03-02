import "../App.css";
import { Container } from "@material-ui/core";
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "./Projects";
import About from "./About";
import TASProjectPage from "../pages/ProjectPages/TASProjectPage";
import DataVisPage from "../pages/ProjectPages/DataVisPage";
import FingerprintPage from "../pages/ProjectPages/FingerprintPage";
import UsabilityPage from "./ProjectPages/UsabilityPage";
import HealthcarePage from "../pages/ProjectPages/HealthcarePage";
import FlatlandPage from "./ProjectPages/FlatlandPage";
import GitMonitorPage from "./ProjectPages/GitMonitorPage";

function TopAppBar() {
  return (
    <Container maxWidth="md" className="nav-bar">
      <div>
        <div className="nav-bar">
          <div className="nav-bar-left">
            <NavLink className="nav-bar-fade" to="/portfolio/about">
              ABOUT
            </NavLink>
          </div>
          <div className="nav-bar-right">
            <NavLink className="nav-bar-fade" to="/portfolio/projects">
              PROJECTS
            </NavLink>
            <NavLink className="nav-bar-fade" to="/portfolio">
              HOME
            </NavLink>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/portfolio" component={Home}></Route>
        <Route exact path="/portfolio/about" component={About}></Route>
        <Route exact path="/portfolio/projects" component={Projects}></Route>
        <Route
          exact
          path="/portfolio/projects/TutorAllocationSystem"
          component={TASProjectPage}
        ></Route>
        <Route
          exact
          path="/portfolio/projects/DataVisualisation"
          component={DataVisPage}
        ></Route>
        <Route
          exact
          path="/portfolio/projects/Fingerprint"
          component={FingerprintPage}
        ></Route>
        <Route
          exact
          path="/portfolio/projects/Usability"
          component={UsabilityPage}
        ></Route>
        <Route
          exact
          path="/portfolio/projects/HealthcareMonitoringSystem"
          component={HealthcarePage}
        ></Route>
        <Route
          exact
          path="/portfolio/projects/FlatlandChallenge"
          component={FlatlandPage}
        ></Route>
        <Route
        exact
        path="/portfolio/projects/GitMonitoringSystem"
        component={GitMonitorPage}
      ></Route>
      </Switch>
    </Container>
  );
}

export default TopAppBar;
