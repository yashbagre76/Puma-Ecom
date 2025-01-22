import React from "react";
import NavBar from "./NavBar";
import AnnouncementBar from "./AnnouncementBar";
import Hero from "./Hero";
import Spotlight from "./Spotlight";
import Discount from "./Discount";
import Evalute from "./Evalute";

const Home = () => {
  return (
    <div>
      <AnnouncementBar />
      <NavBar />
      <Hero />
      <Spotlight />
      <Discount />
      <Evalute />
    </div>
  );
};

export default Home;
