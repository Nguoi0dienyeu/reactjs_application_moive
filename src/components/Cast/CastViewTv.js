import React from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CastTv from "components/Cast/CastTv.js";
import { BrowserRouter as Router, useParams } from "react-router-dom";

function CastViewTv(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    autoplay: true,
    accessibility: true,
  };
  return (
    <section>
        <div className="box-people">
        <Slider {...settings}>
          {props.dataTv &&
            props.dataTv.map((items, index) => (
              <div className="people_img">
                <img
                  className="profile-m"
                  key={index}
                  src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${items.profile_path}`}
                  alt="cast"
                />
                <div className="cast_txt">
                  <p className="txt">
                    <a href="/">{items.name}</a>
                  </p>
                  <p className="txt">{items.character}</p>
                </div>
              </div>
            ))}
             </Slider>
        </div>  
    </section>
  );
}

export default CastViewTv;