import "../App.css";
import Profile from "./Profile";
import { Box } from "@material-ui/core";
import RecentWorks from "./RecentWorks";
import Contact from "./Contact/Contact";
import React from "react";

function Home() {
  return (
    <Box>
      <Profile></Profile>
      <RecentWorks></RecentWorks>
      <Contact></Contact>
    </Box>
  );
}

export default Home;
