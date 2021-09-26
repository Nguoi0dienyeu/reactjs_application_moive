import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowMore from 'screens/ShowMore/index.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function FilmsUpdate() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'movie/now_playing?'
      );
      const removed = result.data.results.splice(4, 20);
      setData(result.data.results);
    };
    fetchData();
  }, []);

  return (
      <Router>
      <Switch>
        <Route path="/movie">
          <ShowMore />
        </Route>
        <div className="container">
          <div className="title">
            <p className="title-left">Film Update</p>
            <p className="title-right">
              <a href="/movie"> Show More...</a>
            </p>
          </div>
          <div className="content">
            <div className="content-film">
              {data.map((items, index) => (
                <div className="watch" key={index}>
                  <a href={`/movie/${items.id}`}>
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
                      <Link to={`/movie/${items.id}`}>{items.title}</Link>
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
  );
}
export default FilmsUpdate;