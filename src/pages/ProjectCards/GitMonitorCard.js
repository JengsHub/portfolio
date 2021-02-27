import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import logo from "../../images/git.png";

function GitMonitorCard() {
  return (
    <Card className="card">
      <CardMedia
        alt="GitHub Logo"
        className="card-images"
        title="GitHub Logo"
      >
        <img src={logo} className="logo" alt="GitHub logo"></img>
      </CardMedia>
      <CardContent className="card-content">
        <h2>Git Monitoring System</h2>
        <p> A system that enables users to view detailed analysis of a git repository.</p>
        <button className="find-out-more">
            Find out more <ArrowRightSharpIcon className="right-arrow" fontSize='small'/>
        </button>
      </CardContent>
    </Card>
  );
}

export default GitMonitorCard;
