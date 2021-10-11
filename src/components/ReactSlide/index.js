import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    autoplay: true,
    accessibility: true,
  };
  return (
    <Slider {...settings}>
        <img
          className="img-slick"
          src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/rCxdJkk5PMCWIzRWcpqIxUaWnf1.jpg"
          alt="Watch If?"
        />
        <img
          className="img-slick"
          src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg"
          alt=""
        />
        <img
          className="img-slick"
          src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/aT0XL7YLDx9GfpU2q8kgWUtn0on.jpg"
          alt=""
        />
    </Slider>
  );
}