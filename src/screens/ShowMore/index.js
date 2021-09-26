import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
      const list = await axios.get(
        '/movie/now_playing?api_key=e7d1a25f4b340e09aa16db0f949d2a5e'
      );
      setData(list.data.results);
      setTotalpage(list.data.total_pages);
      console.log("List Data:",list.data);
    };
    fetchData();
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get(
        `/movie/now_playing?api_key=e7d1a25f4b340e09aa16db0f949d2a5e&page=${page}`
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
                  <a href={`/movie/${items.id}`}>{items.title}</a>
                </p>
                <p className="date">
                  {new Date(items.release_date).getUTCFullYear()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.root}>
          <Pagination count={totalpage} page={page} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
export default ShowMore;