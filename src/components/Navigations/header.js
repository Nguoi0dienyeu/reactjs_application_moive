import React, { useState, useRef,useEffect } from "react";
import axios from 'axios';
import { useDetectOutsideClick } from "components/Navigations/useDetectOutsideClick.js";

function Navigations() {
  const [data,setData] = useState();
  const imageEL = useRef(null);
  const [value, setValue] = useState();
  const [isActive, setIsActive] = useDetectOutsideClick(imageEL, true);
  const onButtonClick = () => setIsActive(!isActive);

  useEffect(()=>{
    const fetchData = async() => {
        // statements
        const result = await axios.get('search/movie?&language=en-US&page=1&include_adult=false');
        setData(result.data);
    }
    fetchData();
  });
  const filter = (e) => {
    setValue(e.target.value);
    console.log("Input value:",e.target.value);
  }
  return (
    <div className="nav">
      <a href="/">
        <img src="logo512.png" alt="logo" />
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