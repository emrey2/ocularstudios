import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Vr from "../components/Vr";

const VirtualReality = () => {
  return (
    <div>
      <Navbar />
      <HeroImg
        heading="Virtual Reality."
        text="Take a leap of faith into the matrix."
      />
      <Vr />
      <Footer />
    </div>
  );
};

export default VirtualReality;
