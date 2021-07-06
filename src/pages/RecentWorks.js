import "../App.css";
import React  from 'react';
import { Container } from "@material-ui/core";
import TASCard from "./ProjectCards/TASCard";
import FlatlandCard from "./ProjectCards/FlatlandCard";
import ViewAll from "./components/ViewAll";
import { Helmet } from "react-helmet";
import BigDataCard from "./ProjectCards/BigDataCard";

function RecentWorks() {
  return (
    <Container>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Helmet>
      <p className="recent-works">MY RECENT PROJECTS</p>
      <TASCard></TASCard>
      <FlatlandCard></FlatlandCard>
      <BigDataCard></BigDataCard>
      <ViewAll></ViewAll>
    </Container>
  );
}

export default RecentWorks;
