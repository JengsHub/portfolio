import "./appRoutes.css";
import { Route, NavLink, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { select } from "./ic-redux/useRedux";
import { RootState } from "./ic-redux/store";
import Container from "@mui/material/Container";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import TASProjectPage from "./pages/ProjectPages/TASProjectPage";
import FlatlandPage from "./pages/ProjectPages/FlatlandPage";
import BigDataPage from "./pages/ProjectPages/BigDataPage";
import HealthcarePage from "./pages/ProjectPages/HealthcarePage";
import UsabilityPage from "./pages/ProjectPages/UsabilityPage";
import FingerprintPage from "./pages/ProjectPages/FingerprintPage";
import GitMonitorPage from "./pages/ProjectPages/GitMonitorPage";
import DataVisPage from "./pages/ProjectPages/DataVisPage";
import DataAnalyticsPage from "./pages/ProjectPages/DataAnalyticsPage";

function AppRoutes() {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));
  const bgColor = colors.primaryWebBackgroundColor;
  const textColor = colors.primaryTextColor;

  const barStyle = { backgroundColor: bgColor, color: textColor };

  return (
    // Create resposive width based on device size
    <div style={{ backgroundColor: bgColor, transition: "0.3s" }}>
      <Container>
        <div className="nav-bar">
          <div className="nav-bar-left">
            <NavLink
              className="nav-bar-fade"
              style={barStyle}
              to="/about"
            >
              ABOUT ME
            </NavLink>
          </div>
          <div className="nav-bar-right">
            <NavLink
              className="nav-bar-fade"
              style={barStyle}
              to="/projects"
            >
              PROJECTS
            </NavLink>
            <NavLink className="nav-bar-fade" style={barStyle} to="/">
              HOME
            </NavLink>
          </div>
        </div>
      </Container>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route
          path="/projects/TutorAllocationSystem"
          element={<TASProjectPage />}
        ></Route>
        <Route
          path="/projects/FlatlandChallenge"
          element={<FlatlandPage />}
        ></Route>
        <Route
          path="/projects/BigDataProcessing"
          element={<BigDataPage />}
        ></Route>
        <Route
          path="/projects/HealthcareMonitoringSystem"
          element={<HealthcarePage />}
        ></Route>
        <Route
          path="/projects/Usability"
          element={<UsabilityPage />}
        ></Route>
        <Route
          path="/projects/Fingerprint"
          element={<FingerprintPage />}
        ></Route>
        <Route
          path="/projects/GitMonitoringSystem"
          element={<GitMonitorPage />}
        ></Route>
        <Route
          path="/projects/DataVisualisation"
          element={<DataVisPage />}
        ></Route>
        <Route
          path="/projects/DataAnalytics"
          element={<DataAnalyticsPage />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
