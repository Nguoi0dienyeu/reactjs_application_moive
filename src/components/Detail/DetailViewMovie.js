import React from "react";
import heart from "image/like.png";

export default function DetailViewMovie(props) {
  return (
    <div className="title-detail">
      <div className="sub-info">
        <div className="sub-img">
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${props.data.poster_path}`}
            alt="poster-detail"
          />
        </div>
        <div className="sub-text">
          <h1>{props.data.title}</h1>
          <p>
            <label>Time:</label>
            <span>{props.data.runtime} minutes</span>
          </p>
          <p>
            <label>Release Date:</label>
            <span>{props.data.release_date}</span>
          </p>
          <p>
            <label>Language:</label>
            {props.data && props.data.spoken_languages
              ? props.data &&
                props.data.spoken_languages.map((items) => (
                  <span>{items.name}</span>
                ))
              : null}
          </p>
          <p>
            <label>Genres:</label>
            {props.data && props.data.genres
              ? props.data &&
                props.data.genres.map((items) => <span>{items.name}</span>)
              : null}
          </p>
          <p>
            <label>Status :</label>
            <span>{props.data.status}</span>
          </p>
          <p>
            <label>IMDB rating: </label>
            <span>{props.data.vote_average}</span>
          </p>
          <div className="favicon">
            <div className="i-vote">
              <img src={heart} alt="" />
            </div>
          </div>
          <div className="overview">
            <hr />
            <p className="overview-txt">{props.data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}