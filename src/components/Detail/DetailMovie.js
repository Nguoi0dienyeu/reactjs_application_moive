import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailViewMovie from "components/Detail/DetailViewMovie.js";
import { BrowserRouter as Router, useParams } from "react-router-dom";

function DetailMovie() {
  const [data, setData] = useState([]);
  let { id } = useParams();

  // detail movie
  useEffect(() => {
    const fetchData = async () => {
      const titles = await axios.get(`movie/${id}?&language=en-US`);
      setData(titles.data);
    };
    fetchData();
  }, [id]);

  return (
    <DetailViewMovie datadetailmovie={data} />
    );
}
export default DetailMovie;