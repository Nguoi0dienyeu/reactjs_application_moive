import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigations from 'components/Navigations/header.js';
import Footer from 'components/Footer/';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
// css paginations
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
  const [totalpage, setTotalpage] = useState();
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get('/movie/now_playing?');
      setData(list.data.results);
      setTotalpage(list.data.total_pages);
      console.log('List Data:', list.data);
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
                  <a href={`/showmore/${items.id}`}>
                    <img
                      src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${items.poster_path}`}
                      alt="film update"
                    />
                  </a>
                  <div className="sub-title">
                    <p>
                      <a href={`/showmore/${items.id}`}>{items.title}</a>
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
  );
}
export default ShowMore;