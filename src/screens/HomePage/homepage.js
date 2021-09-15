import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigations from 'components/Navigations/header.js';
import FilmsUpdate from 'components/FilmsUpdate/index.js';
import SearchMovies from 'components/SearchMovies/index.js';
import TvShow from 'components/TvShow/index.js';
import Footer from 'components/Footer/index.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';



function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Router>
    <Switch>
    <Route path="/detail"></Route>
    <Slider {...settings}>
      <div>
        <img
          className="img-slick"
          src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/rCxdJkk5PMCWIzRWcpqIxUaWnf1.jpg"
          alt="Watch If?"
        />
      </div>
      <div>
        <img
          className="img-slick"
          src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="img-slick"
          src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/aT0XL7YLDx9GfpU2q8kgWUtn0on.jpg"
          alt=""
        />
      </div>
    </Slider>
    </Switch>
    </Router>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="header">
        <Navigations />
        <SimpleSlider />
        <FilmsUpdate />
        <SearchMovies />
        <TvShow />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}