import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import Cast from "components/Cast/index.js";

export default function Movie() {
  const [data, setData] = useState([]);
  let { id } = useParams();
  // data movie
  useEffect(() => {
    const fetchData = async () => {
      const detail = await axios.get(`movie/${id}/credits?&language=en-US`);
      setData(detail.data.cast);
      console.log("Data:", detail.data.cast);
    };
    fetchData();
  }, [id]);
  return (
    <div className="App">
      <Cast dataFromApp={data} />
    </div>
  );
}