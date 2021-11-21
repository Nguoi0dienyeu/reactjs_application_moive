import React, { useState, useRef,useEffect } from "react";
import logo from 'image/logo.png';
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
        <img src={logo} alt="logo" />
      </a>
      <div
        id="nav-second"
        ref={imageEL}
        className={`mobile ${isActive ? "active" : "inactive"}`}
      >
        <ul className="first-menu">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/">favorite</a>
          </li>
          <li>
            <a href="/tvshow">tv show</a>
          </li>
          <li>
            <a href="/">Watching</a>
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