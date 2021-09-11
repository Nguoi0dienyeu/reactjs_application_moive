import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

function FilmsUpdate() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=e7d1a25f4b340e09aa16db0f949d2a5e'
      );
      const items = result.data.results.splice(4, 20);
      setData(result.data.results);
    };
    fetchData();
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/showmore">
            <ShowMore />
          </Route>
          <div className="container">
            <div className="title">
              <p className="title-left">Film Update</p>
              <p className="title-right">
                <Link to="/showmore">
                  <a href="">Show More...</a>
                </Link>
              </p>
            </div>
            <div className="content">
              <div className="content-film">
                {data.map((items, index) => (
                  <div className="watch" key={index}>
                    <img
                      src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${items.poster_path}`}
                      alt="content"
                    />
                    <div className="btn-w-f">
                      <button className="content-w">Watch</button>
                      <button className="content-w">Favourtis</button>
                    </div>
                    <div className="sub-title">
                      <p>
                        <a href="#">{items.title}</a>
                      </p>
                      <p>Year: {new Date(items.release_date).getFullYear()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function ShowMore() {
  const [data, setData] = useState([]);   
  const [itemPerPage,setItemPerPage] = useState ([16]);
  const [page,setPage] = useState([1]);
  const classes = useStyles();

  const handleChange = (event, value) => {
    setPage(value);
    console.log("Item",itemPerPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=e7d1a25f4b340e09aa16db0f949d2a5e'
      );
      const removed = list.data.results.splice(0, 4);
      setData(list.data.results);
      console.log("List data:",list.data.results);
    };
    fetchData();
  }, []);
  return (
    <div id="container">
      <div className="top-movies">
        <h1>Get Lastest Movies</h1>
        <p>update the movies in weekend</p>
        <div className="content-film">
          {data.map((items, index) => (
            <div className="film" key={index}>
              <img
                src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${items.poster_path}`}
                alt="film update"
              />
              <div className="sub-title">
                <p>
                  <a href="">{items.title}</a>
                </p>
                <p className="date">
                  {new Date(items.release_date).getUTCFullYear()}
                </p>
              </div>
            </div>
          ))}
          <div className={classes.root}>
            <Typography>Page: {page}</Typography>
           <Pagination 
             count={75} page={page} 
             onChange={handleChange} 
             itemPerPage = {16}
           />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmsUpdate;
