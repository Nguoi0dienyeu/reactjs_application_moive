import React from 'react';
import './App.scss';
import './index.scss';
import Navigations from 'components/Navigations/header.js';
import HomePage from 'screens/HomePage/homepage.js';
import ShowMore from 'screens/ShowMore/index.js';
import Details from 'screens/Details/index.js';
import Footer from 'components/Footer/index.js';

function App() {
  return (
    <div className="App">
      <Navigations />
      {/*<HomePage />*/}
      <ShowMore/>
      {/*<Details/>*/}
      <Footer />
    </div>
  );
}

export default App;