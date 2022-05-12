import React from "react";

import heroVideo from "../assets/home2.gif";
import { Link } from "react-router-dom";

import "./Video.css";

const Video = () => {
  return (
    <div className="hero">
      <img alt="" id="video" src={heroVideo} />
      <div className="content">
        <h1>
          OCUL<span>AR</span>VERSE
        </h1>
        <p>Take your place in the future.</p>
        <div>
          <Link to="/contact" className="btn">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
