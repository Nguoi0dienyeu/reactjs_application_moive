import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Link} from 'react-router-dom';
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
  const [dslide, setSlide] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`movie/now_playing?`);
      const remove = result.data.results.splice(4, 20);
      setSlide(result.data.results);
      console.log("Slide:", result.data.results);
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    accessibility: true,
  };

  return (
    <Slider {...settings}>
      {dslide.map((items, index) => (
        <Link to={`/movie/${items.id}`}>
          <img
            key={index}
            className="img-slick"
            src={`https://www.themoviedb.org/t/p/w1920_and_h600_face/${items.backdrop_path}`}
            alt="Watch If?"
          />
        </Link>
      ))}
    </Slider>
  );
}