import React from 'react';
import SimpleSlider from 'components/ReactSlide/';
import Navigations from 'components/Navigations/header.js';
import FilmsUpdate from 'components/FilmsUpdate/';
import SearchMovies from 'components/SearchMovies/';
import TvShow from 'components/TvShow/';
import Footer from 'components/Footer/';

export default function HomePage() {
  return (
    <div className="App">
      <div className="container-flud">
        <Navigations />
        <SimpleSlider /> 
        <FilmsUpdate />
        <SearchMovies />
        <TvShow />
      </div>
      <Footer/>
    </div>
  );
}