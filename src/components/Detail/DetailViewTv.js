import React, { useState, useEffect } from "react";
import DetailTv from "components/Detail/DetailTv.js";

export default function DetailViewTv(props) {
  return (
    <div className="title-detail">
      <div className="sub-info">
        <div className="sub-img">
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${
              props.datadetailtv && props.datadetailtv.poster_path
            }`}
            alt="info"
          />
        </div>
        <div className="sub-text">
          <h1>{props.datadetailtv && props.datadetailtv.name}</h1>
          <p>
            <label>Time:</label>
            <span>
              {props.datadetailtv && props.datadetailtv.episode_run_time} minutes
            </span>
          </p>
          <p>
            <label>Release Date:</label>
            <span>
              {props.datadetailtv && props.datadetailtv.last_air_date}
            </span>
          </p>
          <p>
            <label>Language:</label>
            {props.datadetailtv && props.datadetailtv.spoken_languages
              ? props.datadetailtv &&
                props.datadetailtv.spoken_languages.map((items) => (
                  <span>{items.name}</span>
                ))
              : null}
          </p>
          <p>
            <label>Genres:</label>
            {props.datadetailtv && props.datadetailtv.genres
              ? props.datadetailtv &&
                props.datadetailtv.genres.map((items) => (
                  <span>{items.name}</span>
                ))
              : null}
          </p>
          <p>
            <label>Number:</label>
            {props.datadetailtv && props.datadetailtv.seasons
              ? props.datadetailtv &&
                props.datadetailtv.seasons.map((items) => (
                  <span>{items.episode_count}</span>
                ))
              : null}
          </p>
          <p>
            <label>Season:</label>
            <span>{props.datadetailtv && props.datadetailtv.number_of_seasons}</span>
          </p>
          <p>
            <label>Status :</label>
            <span>{props.datadetailtv && props.datadetailtv.status}</span>
          </p>
          <p>
            <label>IMDB rating: </label>
            <span>{props.datadetailtv && props.datadetailtv.vote_average}</span>
          </p>
          <p>
            <label>Created By: </label>
            {props.datadetailtv && props.datadetailtv.created_by
              ? props.datadetailtv &&
                props.datadetailtv.created_by.map((items) => (
                  <span>{items.name}</span>
                ))
              : null}
          </p>
          <div className="overview">
            <hr />
            <p className="overview-txt">
              {props.datadetailtv && props.datadetailtv.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}