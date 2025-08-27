import React from "react";
import AboutIntro from "../components/aboutComponents/AboutIntro";
import MissionVision from "../components/aboutComponents/MissionVision";
import OurJourney from "../components/aboutComponents/OurJourney";
import Sustainability from "../components/aboutComponents/Sustainability";
import GlobalReach from "../components/aboutComponents/GlobalReach";
import AboutHero from "../components/aboutComponents/AboutHero";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <MissionVision />
      <OurJourney />
      <Sustainability />
      <GlobalReach />
    </>
  );
};

export default AboutPage;
