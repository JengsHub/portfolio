import "../../App.css";
import { Box, Container } from "@material-ui/core";
import Github from "../../images/Github.jpg";
import GitMonitor from "../../images/git monitoring.png";
import Login from "../../images/Login_page.png";
import Details from "../../images/Screenshot (17).png";
import { useEffect } from "react";

function GitMonitorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Box>
      <Container maxWidth="md">
        <h1 className="intro">🔎 GitHub Monitoring System 🔍</h1>
        <div className="info-container">
          <p className="info">Last updated : March, 2021</p>
          {/* eslint-disable react/jsx-no-target-blank */}
          Available at{" "}
          <a href="https://github.com/JengsHub/GitMonitoring" target="_blank">
            https://github.com/JengsHub/GitMonitoring
          </a>
        </div>
        <img className="git-logo" src={Github} alt="github logo"></img>
        <p className=" indent profile-text">
          Marking team projects in a university project is always a hassle for
          the teaching team. The markers have to figure out how much work each
          team member contributed, whether it was any good, and whether it was
          done in a timely manner or so late that the team had no chance to test
          it. For a GitHub repository, it would be very useful to present
          statistics of the repository for repository owners, like a timeline
          showing when work was checked in, pie charts showing the proportion of
          lines of code each contributor checked in, and a list showing which
          team members were responsible for which files, average time to fix or
          close issues, average time to response to issue discussion, number of
          issues raised per class/file, and the main developers who resolve
          issues.
        </p>
        {/* eslint-disable react/jsx-no-target-blank */}
        <a
          href="https://itnext.io/monitoring-the-performance-of-software-teams-using-github-jira-and-grafana-42035b18eae6"
          target="_blank"
        >
          <img
            className="git-monitoring"
            src={GitMonitor}
            alt="github monitoring"
          ></img>
        </a>
        <i className="caption">Example of monitoring done on repository</i>
        <p className=" indent profile-text">
          With the use of GitHub's RESTful interface, we can get push events
          (when code is checked in) of a GitHub repository. More info on the
          commit interface{" "}
          <a
            href=" https://
developer.github.com/v3/activity/events/types/#pushevent"
            target="_blank"
          >
            {" "}
            here
          </a>
          . The project was written with javascript and the use of Corvid's API
          (now known as Velo) on Wix.com. As Wix's free hosting has run out of
          its duration, attached screenshots below shows the basic UI of the
          project.
        </p>
        <img className="ui" src={Login} alt="Login Page"></img>
        <i className="caption">Login Page UI</i>
        <img
          className="ui"
          src={Details}
          alt="GitHub repository contributers"
        ></img>
        <i className="caption">GitHub repository contributers UI</i>
        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default GitMonitorPage;
