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
          What is Web 3.0? Delegating content control to software, that is, the
          semantic web, in other words, the "artificial intelligence web", can
          be called the new web world where we can discover what we are
          interested in thanks to databases that talk to each other, and the
          software will offer us and cover all devices connected to the
          internet. This whole plot is connected to the concept of the semantic
          web. What is the semantic web? In its simplest form, it means the
          meaning of words. Web 3.0 shall be understood as meaning, not the word
          integrity of the articles. Search engines will become smarter. It will
          understand what we are looking for and want to understand and will lay
          the foundations for new technology.
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
