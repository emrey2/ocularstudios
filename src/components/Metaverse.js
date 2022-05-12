import React from "react";

import { Link } from "react-router-dom";

import metaverse from "../assets/metaverse.jpg";
//import metaverse_2 from "../assets/metaverse_2.jpg";

import metaverseVid from "../assets/metaverse_video.mp4";

import "./Metaverse.css";

const Vr = () => {
  return (
    <div className="metaverse">
      <div className="left">
        <h1>Metaverse</h1>
        <p>
          Many clients come to OcularVerse to help them visualise a script or a
          new world. Our artists often partner with a director or marketer to
          enable them to ‘see’ the images they are seeking to create. This
          highly skilled and creative group is available to all external and
          internal productions. Their aim is simple: to enable clients to fully
          visualise their project.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img_container">
          <div className="img_stack top">
            <video
              className="img"
              src={metaverseVid}
              autoPlay
              loop
              muted
              type="video/mp4"
            />
          </div>
          <div className="img_stack bottom">
            <img src={metaverse} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vr;
