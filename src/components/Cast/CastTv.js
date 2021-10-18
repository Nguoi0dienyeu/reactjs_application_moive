import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import CastViewTv from "components/Cast/CastViewTv.js";

export default function CastTv() {
  const [data, setData] = useState([]);
  let { id } = useParams();
  // data movie
  useEffect(() => {
    const fetchData = async () => {
      const detail = await axios.get(`tv/${id}/credits?&language=en-US`);
      setData(detail.data.cast);
    };
    fetchData();
  }, [id]);
  return (
    <div className="profile">
      <CastViewTv dataTv={data} />
    </div>
  );
}