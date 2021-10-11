import React from 'react';
import './App.scss';
import './index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from 'screens/HomePage/homepage.js';
import ShowMore from 'screens/ShowMore/';
import Details from 'screens/Details/';
import DetailTv from 'screens/DetailTv/';
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
          <Details />
        </Route>
        <Route path="/detailtv/:id">
          {/*su dung bien id trong screens/DetailTv*/}
          {/* Detail su dung cho tvshow*/}
          <DetailTv />
        </Route>
        <Route path="/tvshow">
          <ShowMoreTv />
        </Route>
      </Switch>
    </Router>
  );
}