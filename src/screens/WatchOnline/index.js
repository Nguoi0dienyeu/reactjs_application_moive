import React, { useState } from "react";
import WatchMovie from 'screens/WatchOnline';
import WatchTv from 'screens/WatchTv';

export default function WatchOnline() {
  const [data, setData] = useState(null);
  const [isloadingOk, setIsloadingOk] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <div className="container-flud">
        <div className="main-video">
          <div className="video">
            <div className="title">
              <h1 className="top">Watching</h1>
              <div className="info">
              <WatchMovie />
              <WatchTv />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}