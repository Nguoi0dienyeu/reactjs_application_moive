import React from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Movie from 'components/Cast/Movie.js';
import { BrowserRouter as Router, useParams } from "react-router-dom";

function SimpleSlider(props) {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const detail = await axios.get(`tv/${id}/credits?&language=en-US`);
  //     setData(detail.data.cast);
  //   };
  //   fetchData();
  // }, [id]);
   const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    autoplay: true,
    accessibility: true,
  };
  return (
    <section>
    <div className="cast-crew">
      <p>Cast/character</p>
    </div>
    <Slider {...settings}>
        <div className="box-people">
        {props.dataFromApp.map((items,index) => (
          <div className="people_img">
            <img
              className="profile-m"
              key={index}
              src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${items.profile_path}`}
              alt="cast"
            />
            <div className="cast_txt">
              <p className="txt"><a href="/">{items.title}</a></p>
              <p className="txt">{items.name}</p>
            </div>
          </div>
          ))}
        </div>
       </Slider>
    </section>
    );
}
function Cast() {
  return (
    <SimpleSlider  />
  );
}
export default Cast;