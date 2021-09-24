import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import Details from 'screens/Details/index.js';
import { makeStyles } from '@material-ui/core/styles';
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
      console.log('Data HomePage FIlm update', result.data);
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
        <Route path="/showmoretv"></Route>
        <div className="container">
          <div className="title">
            <p className="title-left">Film Update</p>
            <p className="title-right">
              <Link to="/showmore"> Show More...</Link>
            </p>
          </div>
          <div className="content">
            <div className="content-film">
              {data.map((items, index) => (
                <div className="watch" key={index}>
                  <a href="/">
                    <img
                      src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${items.poster_path}`}
                      alt="content"
                    />
                  </a>
                  <div className="btn-w-f">
                    <button className="content-w">Watch</button>
                    <button className="content-w">Favourtis</button>
                  </div>
                  <div className="sub-title">
                    <p>
                      <Link to="/detail">{items.title}</Link>
                    </p>
                    <p>Year: {new Date(items.release_date).getFullYear()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Switch>
            <Route path="/:id" children={<Child />} />
          </Switch>
        </div>
        </Switch>
      </Router>
    </>
  );
}

function Child() {
  let {id} = useParams();
  return (
     <Details/>
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
  const [page, setPage] = useState(1);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=e7d1a25f4b340e09aa16db0f949d2a5e'
      );
      setData(list.data.results);
    };
    fetchData();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=e7d1a25f4b340e09aa16db0f949d2a5e&page=${page}`
      );
      setData(list.data.results);
    };
    fetchData();
  }, [page]);

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
                  <Link to="/detail">{items.title}</Link>
                </p>
                <p className="date">
                  {new Date(items.release_date).getUTCFullYear()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.root}>
          <Pagination count={80} page={page} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
export default FilmsUpdate;