import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Metaverse from "../components/Metaverse";

const VirtualReality = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="Metaverse." text="Take your place in reality." />
      <Metaverse />
      <Footer />
    </div>
  );
};

export default VirtualReality;
