import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header_bg" : "header"}>
      <Link to="/">
        <h1>
          OCUL<span>AR</span>VERSE
        </h1>
      </Link>
      <ul className={click ? "nav_menu active" : "nav_menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/vr">Virtual Reality</Link>
        </li>
        <li>
          <Link to="/vfx">VFX</Link>
        </li>
        <li>
          <Link to="/metaverse">Metaverse</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
