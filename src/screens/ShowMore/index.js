<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Navigations from "components/Navigations/header.js";
import Footer from "components/Footer/";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
=======
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Spin } from 'antd';
import axios from 'axios';
import Footer from 'components/Footer/';
import Navigations from 'components/Navigations/header.js';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> 6d1b189f25e8fae9d3d616a061a7670bb83f948a
// css paginations
const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function ShowMore(props) {
  const {loading} = props;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState();
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get("/movie/now_playing?");
      setData(list.data.results);
      setTotalpage(list.data.total_pages);
    };
    fetchData();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get(`/movie/now_playing?&page=${page}`);
      setData(list.data.results);
    };
    fetchData();
  }, [page]);
  return (
    <Spin spinning={loading}>
    <div className="App">
      <div className="container-flud">
        <Navigations />
        <div id="container">
          <div className="top-movies">
            <h1>Get Lastest Movies</h1>
            <p>update the movies in weekend</p>
            <div className="content-film">
              {data.map((items, index) => (
                <div className="film" key={index}>
                  <Link to={`/movie/${items.id}`}>
                    <img
                      src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${items.poster_path}`}
                      alt="film update"
                    />
                  </Link>
                  <div className="imdb">
                    <div className="i-imdb">{items.vote_average}</div>
                  </div>
                  <div className="sub-title">
                    <p>
                      <Link to={`/movie/${items.id}`}>{items.title}</Link>
                    </p>
                    <p className="date">
                      {new Date(items.release_date).getUTCFullYear()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={classes.root}>
              <Pagination
                count={totalpage}
                page={page}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </Spin>
  );
}