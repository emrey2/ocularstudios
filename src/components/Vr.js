import React from "react";

import { Link } from "react-router-dom";

import vr2 from "../assets/vr_2.jpg";

import vrVid from "../assets/vr.gif";

import "./Vr.css";

const Vr = () => {
  return (
    <div className="vr">
      <div className="left">
        <h1>Virtual Reality</h1>
        <p>
          With a passion for bringing the highest-quality visuals to latest
          immersive experiences in the metaverse, VR studio is uniquely placed
          to call on the creative studio’s team of talented artists and
          technologists in order to create new virtual worlds. The teams’
          projects include location-based entertainment, theme park rides and VR
          experiences for some of the world’s biggest entertainment and consumer
          brands. ​
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img_container">
          <div className="img_stack top">
            <img alt="" className="img" src={vrVid} />
          </div>
          <div className="img_stack bottom">
            <img src={vr2} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vr;
