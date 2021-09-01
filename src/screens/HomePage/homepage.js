import React from 'react';
import Navigations from 'components/Navigations/header.js';
import FileUpdates from 'components/FileUpdates/index.js';
import SearchMovies from 'components/SearchMovies/index.js';
import TvShow from 'components/TvShow/index.js';
import Footer from 'components/Footer/index.js';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

 function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img className = "img-slick" src="image/qc.jpg" alt=""/>
      </div>
      <div>
       <img className = "img-slick" src="image/qc.jpg" alt=""/>
      </div>
      <div>
        <img className = "img-slick" src="image/qc.jpg" alt=""/>
      </div>
    </Slider>
  );
}

export default function HomePage() {
	return (
    <>
		<div className = "header">
			<Navigations/>
			<SimpleSlider/>
      <FileUpdates/>
      <SearchMovies/>
      <TvShow/>
		</div>
    <div className ="footer">
      <Footer/>
    </div>
    </>
	);
}

