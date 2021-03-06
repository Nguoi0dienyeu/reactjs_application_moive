import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FilmsUpdate() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('movie/now_playing?');
      const removed = result.data.results.splice(4,20);
      setData(result.data.results);
    };
    fetchData();
  }, []);

  return (
      <div className="container">
        <div className="title">
          <p className="title-left">News Update</p>
          <p className="title-right">
            <Link to="/showmore"> Show More</Link>
          </p>
        </div>
        <div className="content">
          <div className="content-film">
            {data.map((items, index) => (
              <div className="watch" key={index}>
              <Link to={`/movie/${items.id}`}>
                  <img
                    src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${items.poster_path}`}
                    alt="content"
                  />
                </Link>
                <div className="btn-w-f">
                  <button className="content-w">Watch</button>
                  <button className="content-w">Favourtis</button>
                </div>
                <div className="sub-title">
                  <p>
                    <Link to={`/movie/${items.id}`}>{items.title}</Link>
                  </p>
                  <p className="sub-date">{new Date(items.release_date).getFullYear()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
