import "../App.css";
import { Container } from "@material-ui/core";

function Profile() {
  return (
    <Container maxWidth="md">
      <div>
        <h1>
          Hi, I'm{" "}
          <a className="name-link">
            Jeng Yue
          </a>
        </h1>
      </div>
      <div>
        <p className="profile-text">
          I'm an aspiring software engineer who is currently pursuing a degree
          in Software Engineering in Monash University Malaysia. My biggest
          advantage is probably my outgoing personality which has provided me
          with the ability to adapt and create a stable environment for me to
          work. Additionally, I am no stranger to software development processes
          such as{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a
            href="https://www.scrum.org/resources/what-is-scrum"
            target="_blank"
          >
            Scrum
          </a>{" "}
          and{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a href="https://www.scaledagileframework.com/" target="_blank">
            SAFe
          </a>
          .
        </p>
      </div>
    </Container>
  );
}

export default Profile;
