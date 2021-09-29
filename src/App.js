import React from 'react';
import './App.scss';
import './index.scss';
import Navigations from 'components/Navigations/header.js';
import HomePage from 'screens/HomePage/homepage.js';
import ShowMore from 'screens/ShowMore/';
import Details from 'screens/Details/';
import Footer from 'components/Footer/';

function App() {
  return (
    <div className="App">
      <div className="container-flud">
        <Navigations />
        <HomePage />
        {/* <ShowMore />*/}
        {/*<Details/>*/}
      </div>
      <Footer />
    </div>
  );
}

export default App;