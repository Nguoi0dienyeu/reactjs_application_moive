import React, { useState } from "react";
import WatchMovie from 'screens/WatchMovie';
import Navigations from "components/Navigations/header.js";
import Footer from "components/Footer";

export default function WatchOnline() {
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
              <div className="info">
              <WatchMovie />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}