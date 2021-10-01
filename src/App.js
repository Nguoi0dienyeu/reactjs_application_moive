import React from 'react';
import './App.scss';
import './index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from 'screens/HomePage/homepage.js';
import ShowMore from 'screens/ShowMore/';
import Details from 'screens/Details/';
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
        <Route path="/detail">
          <Details />
        </Route>
        <Route path="/tvshow">
          <ShowMoreTv />
        </Route>
      </Switch>
    </Router>
  );
}