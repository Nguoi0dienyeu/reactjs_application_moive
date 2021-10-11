import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import Cast from "components/Cast/";
import axios from "axios";

export default function DetailTitle() {
  const [data, setData] = useState([]);
  let { id } = useParams();

  // detail movie
  useEffect(() => {
    const fetchData = async () => {
      const titles = await axios.get(`movie/${id}?&language=en-US`);
      setData(titles.data);
      console.log("Movie:", titles.data);
    };
    fetchData();
  }, [id]);

  // detail  tvshow
  useEffect(() => {
    const fetchData = async () => {
      const tvlist = await axios.get(`tv/${id}?&language=en-US`);
      setData(tvlist.data);
      console.log("Tv:", tvlist.data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="title-detail">
      <div className="sub-info">
        <div className="sub-img">
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${data.poster_path}`}
            alt="info"
          />
        </div>
        <div className="sub-text">
          <h1>{data.name} {data.title}</h1>
          <p>
            <label>Time:</label>
            <span>
              {data.runtime} {data.episode_run_time} minutes
            </span>
          </p>
          <p>
            <label>Release Date:</label>
            <span>
              {data.release_date} {data.last_air_date}
            </span>
          </p>
          <p>
            <label>Language:</label>
            {data.spoken_languages
              ? data.spoken_languages.map((items) => <span>{items.name}</span>)
              : null}
          </p>
          <p>
            <label>Genres:</label>
            {data.genres
              ? data.genres.map((items) => <span>{items.name}</span>)
              : null}
          </p>
          <p>
            <label>Status :</label>
            <span>{data.status}</span>
          </p>
          <p>
            <label>IMDB rating: </label>
            <span>{data.vote_average}</span>
          </p>
          <p>
            <label>Created By: </label>
            {data.created_by?data.created_by.map((items) => <span>{items.name}</span>):null}
          </p>
          <div className="overview">
            <hr />
            <p className="overview-txt">{data.overview}</p>
          </div>
        </div>
      </div>
      <div className="profile">
        <Cast />
      </div>
    </div>
  );
}