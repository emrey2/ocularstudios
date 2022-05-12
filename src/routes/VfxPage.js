import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Vfx from "../components/Vfx";

const VirtualReality = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="VFX." text="Immerse yourself in stunning graphics." />
      <Vfx />
      <Footer />
    </div>
  );
};

export default VirtualReality;
