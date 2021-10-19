import React, { useState } from "react";
import DetailTv from 'components/Detail/DetailTv.js';
import CastTv from 'components/Cast/CastTv.js';
import CastMovie from 'components/Cast/CastMovie.js';
import DetailMovie from 'components/Detail/DetailMovie.js';
import Navigations from "components/Navigations/header.js";
import Footer from "components/Footer";

export default function WatchOnline(props) {
  const [data, setData] = useState(null);
  const [isloadingOk, setIsloadingOk] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <div className="container-flud">
        <Navigations />
        <div className="main-video">
          <div className="video">
            <div className="title">
              <h1 className="top">Watching</h1>
              <div className="info"></div>
            </div>
          </div>
        </div>
        <CastMovie />
        <CastTv />
      </div>
      <Footer />
    </div>
  );
}