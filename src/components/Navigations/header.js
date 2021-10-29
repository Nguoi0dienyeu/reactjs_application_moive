import React, { useState, useRef,useEffect } from "react";
import axios from 'axios';
import { useDetectOutsideClick } from "components/Navigations/useDetectOutsideClick.js";

function Navigations() {
  const imageEL = useRef(null);
  const [value, setValue] = useState();
  const [isActive, setIsActive] = useDetectOutsideClick(imageEL, true);
  const onButtonClick = () => setIsActive(!isActive);
  const filter = (e) => {
    setValue(e.target.value);
    console.log("Input value:",e.target.value);
  }

  return (
    <div className="nav">
      <a href="/">
        <img src="logo.png" alt="logo" />
      </a>
      <div
        id="nav-second"
        ref={imageEL}
        className={`mobile ${isActive ? "active" : "inactive"}`}
      >
        <ul className="first-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Favourtis</a>
          </li>
          <li>
            <a href="/tvshow">Tv Show</a>
          </li>
          <li>
            <a href="/">Watch Online</a>
          </li>
        </ul>
        <input
          onChange={filter}
          value={value}
          className="box-search"
          placeholder="Movie Searching.."
        />
      </div>
      <div className="menu-mobile">
        <button className="text-w3" onClick={onButtonClick}>☰</button>
      </div>
    </div>
  );
}

export default Navigations;