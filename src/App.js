import React from 'react';
import './App.scss';
import './index.scss';
import HomePage from 'screens/HomePage/homepage.js';
import ShowMore from 'screens/ShowMore/index.js';
import Details from 'screens/Details/index.js';

function App() {
  return (
    <div className="App">
      {/*<HomePage />*/}
      <ShowMore/>
      {/*<Details/>*/}
    </div>
  );
}

export default App;