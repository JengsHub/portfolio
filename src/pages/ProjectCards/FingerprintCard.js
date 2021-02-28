import "../../App.css";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import logo from "../../images/fingerprint.png";
import { useHistory } from "react-router-dom";

function FingerprintCard() {
  const history = useHistory();
  return (
    <Card className="card">
      <CardMedia
        alt="Fingerprint Logo"
        className="card-images peach"
        title="Fingerprint Logo"
      >
        <img src={logo} className="logo" alt="Fingerprint logo"></img>
      </CardMedia>
      <CardContent className="card-content">
        <h2>Fingerprint Recognition</h2>
        <p> With the reference of research papers published online, my team and I developed a fingerprint recognition system using distinct fingerprint minutiae.</p>
        <button className="find-out-more"
                  onClick={() =>
                    history.push("/portfolio/projects/Fingerprint")
                  }>
            Find out more <ArrowRightSharpIcon className="right-arrow" fontSize='small'/>
        </button>
      </CardContent>
    </Card>
  );
}

export default FingerprintCard;
