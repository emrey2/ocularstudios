import React from "react";
import HeroImg from "../components/HeroImg";
import Navbar from "../components/Navbar";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="CONTACT." text="Contact OCULARVERSE" />
      <Form />
    </div>
  );
};

export default Contact;
