import "../App.css";
import { Container } from "@material-ui/core";
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "./Projects";
import About from "./About"

function TopAppBar() {
  return (
    <Container maxWidth="md" className="nav-bar">
      <div>
        <div className="nav-bar">
          <div className="nav-bar-left">
          <NavLink className="nav-bar-fade" to="/about">
              JENG YUE
            </NavLink>
          </div>
          <div className="nav-bar-right">
          <NavLink className="nav-bar-fade" to="/projects">
              PROJECTS
            </NavLink>
            <NavLink className="nav-bar-fade" to="/">
              HOME
            </NavLink>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/projects" component={Projects}></Route>
      </Switch>
    </Container>
  );
}

export default TopAppBar;
