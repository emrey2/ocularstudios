import React from "react";

import { Link } from "react-router-dom";

import vr2 from "../assets/vr_2.jpg";

import vrVid from "../assets/vr.gif";

import "./ThreeDimensions.css";

import { Canvas } from "react-three-fiber";

import { OrbitControls, Stars } from "@react-three/drei";

function Box() {
  return (
    <mesh position={[0, 1, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

const ThreeDimension = () => {
  return (
    <div className="vr">
      <div className="left">
        <h1>Web3</h1>
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
        <Canvas>
          <OrbitControls />
          <Stars />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Box />
        </Canvas>
      </div>
    </div>
  );
};

export default ThreeDimension;
