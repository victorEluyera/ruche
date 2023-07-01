import React from "react";
import AboutUs from "../components/about/AboutUs";
import Benefits from "../components/benefits/Benefits";
import Bonus from "../components/bonus/Bonus";
import Explore from "../components/explore/Explore";
import Feature from "../components/features/Feature";
import Hero from "../components/Hero/Hero";
import HighLight from "../components/highlight/HighLight";
import NewsLetter from "../components/newsletter/NewsLetter";
import Testimony from "../components/testimony/Testimony";

function Home() {
  return (
    <div style={{ marginTop: "80px" }}>
      <Hero />
      <HighLight />
      <Feature />
      <div id="brand">
        <AboutUs />
      </div>
      <Benefits />
      <Explore />
      <Testimony />
      <Bonus />
      <NewsLetter />
    </div>
  );
}

export default Home;
