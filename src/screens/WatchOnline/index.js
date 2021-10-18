import React, { useState } from "react";
import SimpleSlider from "components/CastCharacter";
import CastView from "components/Cast/CastView";
import Navigations from "components/Navigations/header.js";
import Footer from "components/Footer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
              <h1 className="top">Watching</h1>
              <div className="info"></div>
            </div>
          </div>
        </div>
        <CastView />
      </div>
      <Footer />
    </div>
  );
}