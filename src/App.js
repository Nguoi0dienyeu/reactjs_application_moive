import React from "react";
import "./App.scss";
import "./index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "screens/HomePage/homepage.js";
import ShowMore from "screens/ShowMore/";
import WatchMovie from "screens/WatchMovie/";
import WatchTv from "screens/WatchTv/";
import ShowMoreTv from "screens/ShowMoreTv/";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/showmore">
          <ShowMore />
        </Route>
        <Route path="/:type/:id">
          {/*su dung bien id trong component/Detail*/}
          {/* Detail su dung cho movie film*/}
          <WatchMovie />
        </Route>
        <Route path="/:typetv/:id">
          {/*su dung bien id trong component/Detail*/}
          {/* Detail su dung cho movie film*/}
          <WatchTv />
        </Route>
        <Route path="/tvshow">
          <ShowMoreTv />
        </Route>
      </Switch>
    </Router>
  );
}