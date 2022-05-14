import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import ThreeDimension from "../components/ThreeDimension";

const Web3 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="Web 3.0" text="Take a leap of faith into the matrix." />
      <ThreeDimension />
      <Footer />
    </div>
  );
};

export default Web3;
