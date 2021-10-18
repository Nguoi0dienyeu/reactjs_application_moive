import React from 'react';
import './App.scss';
import './index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from 'screens/HomePage/homepage.js';
import ShowMore from 'screens/ShowMore/';
import WatchOnline from 'screens/WatchOnline/';
import ShowMoreTv from 'screens/ShowMoreTv/';
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
        <Route path="/detail/:id">
          {/*su dung bien id trong screens/Detail*/}
          {/* Detail su dung cho movie film*/}
          <WatchOnline />
        </Route>
        <Route path="/tvshow">
          <ShowMoreTv />
        </Route>
      </Switch>
    </Router>
  );
}