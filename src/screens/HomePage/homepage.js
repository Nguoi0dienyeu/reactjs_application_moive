import React from 'react';
import SimpleSlider from 'components/ReactSlide/';
import FilmsUpdate from 'components/FilmsUpdate/';
import SearchMovies from 'components/SearchMovies/';
import TvShow from 'components/TvShow/';

export default function HomePage() {
  return (
    <>
      <div className="container-flud">
        <SimpleSlider />
        <FilmsUpdate />
        <SearchMovies />
        <TvShow />
      </div>
    </>
  );
}