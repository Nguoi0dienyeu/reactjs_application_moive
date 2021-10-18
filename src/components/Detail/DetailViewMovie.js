import React from "react";
import DetailMovie from "components/Detail/DetailMovie.js";

export default function DetailViewMovie(props) {
  return (
    <div className="title-detail">
      <div className="sub-info">
        <div className="sub-img">
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${
              props.datadetailmovie && props.datadetailmovie.poster_path
            }`}
            alt="info"
          />
        </div>
        <div className="sub-text">
          <h1>{props.datadetailmovie && props.datadetailmovie.title}</h1>
          <p>
            <label>Time:</label>
            <span>
              {props.datadetailmovie && props.datadetailmovie.runtime} minutes
            </span>
          </p>
          <p>
            <label>Release Date:</label>
            <span>
              {props.datadetailmovie && props.datadetailmovie.release_date}
            </span>
          </p>
          <p>
            <label>Language:</label>
            {props.datadetailmovie && props.datadetailmovie.spoken_languages
              ? props.datadetailmovie &&
                props.datadetailmovie.spoken_languages.map((items) => (
                  <span>{items.name}</span>
                ))
              : null}
          </p>
          <p>
            <label>Genres:</label>
            {props.datadetailmovie && props.datadetailmovie.genres
              ? props.datadetailmovie &&
                props.datadetailmovie.genres.map((items) => (
                  <span>{items.name}</span>
                ))
              : null}
          </p>
          <p>
            <label>Status :</label>
            <span>{props.datadetailmovie && props.datadetailmovie.status}</span>
          </p>
          <p>
            <label>IMDB rating: </label>
            <span>
              {props.datadetailmovie && props.datadetailmovie.vote_average}
            </span>
          </p>
          <p>
            <label>Created By: </label>
            {props.datadetailmovie && props.datadetailmovie.created_by
              ? props.datadetailmovie &&
                props.datadetailmovie.created_by.map((items) => (
                  <span>{items.name}</span>
                ))
              : null}
          </p>
          <div className="overview">
            <hr />
            <p className="overview-txt">
              {props.datadetailmovie && props.datadetailmovie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}