import React from "react";

import { Link } from "react-router-dom";

import vfx2 from "../assets/vfx3.jpg";

import vfxVid from "../assets/vfx.gif";

import "./Vfx.css";

const Vr = () => {
  return (
    <div className="vfx">
      <div className="left">
        <h1>VFX</h1>
        <p>
          OcularStudios's producers and artists work to create striking
          advertising for client and brand partners across the globe. With teams
          based in London, Izmir and Chicago, OcularStudios operates a
          sophisticated advertising pipeline with the expertise to create images
          of the highest quality animations. From previsualisation to colour
          grading, versioning to visual effects, the careful craft of our
          advertising teams knows no bounds in the metaverse. Virtual Reality
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img_container">
          <div className="img_stack top">
            <img alt="" className="img" src={vfxVid} />
          </div>
          <div className="img_stack bottom">
            <img src={vfx2} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vr;
