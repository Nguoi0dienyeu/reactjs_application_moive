import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FileUpdates() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=e7d1a25f4b340e09aa16db0f949d2a5e'
      );
      setData(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="title">
          <p className="title-left">Film Update</p>
          <p className="title-right">
            <a href="">Show More....</a>
          </p>
        </div>

        <div className="content">
          <div className="content-film">
            {data.slice(0, 4).map((items, index) => (
              <div className="watch" key={index}>
                <img
                  src={`https://www.themoviedb.org/t/p/w440_and_h660_face${items.poster_path}`}
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
    </>
  );
}
export default FileUpdates;
