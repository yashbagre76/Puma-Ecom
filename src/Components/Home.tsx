import React from "react";
import NavBar from "./NavBar";
import AnnouncementBar from "./AnnouncementBar";
import Hero from "./Hero";
import Spotlight from "./Spotlight";
import Discount from "./Discount";
import Evalute from "./Evalute";
import Winteraddition from "./Winteraddition";
import Colabs from "./Colabs";
import Pvsandhu from "./Pvsandhu";

const Home = () => {
  return (
    <div>
      <AnnouncementBar />
      <NavBar />
      <Hero />
      <Spotlight />
      <Discount />
      <Evalute />
      <Winteraddition />
      <Colabs />
      <Pvsandhu />
    </div>
  );
};

export default Home;
