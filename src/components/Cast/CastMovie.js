import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import CastView from "components/Cast/CastView.js";

export default function CastMovie() {
  const [data, setData] = useState([]);
  let {type,id } = useParams();
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
    <div className="profile">
      <CastView dataMovie={data} />
    </div>
  );
}