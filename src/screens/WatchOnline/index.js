import React, { useState } from "react";
import { render } from "react-dom";
import WatchMovie from "screens/WatchOnline";
import WatchTv from "screens/WatchTv";
import { CircularProgress, Button } from "@material-ui/core";
import ColoredLinearProgress from "./LineProgress";

export default function WatchOnline(props) {
  const { loading,Setloading } = props;

  return (
    <div className="App">
      <div className="container-flud">
        <div className="main-video">
          <div className="video">
            <div className="title">
              <Button variant="contained" onClick={onClick} disabled={loading}>
                {loading && <CircularProgress size={16} />}
                {!loadig && "Click me"}
              </Button>
              <h1 className="top">Watching</h1>
              <div className="info">
                <WatchTv />
                <WatchMovie />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonLoading() {
  const {loadingOk,SetLoadingOk} = useState();

}