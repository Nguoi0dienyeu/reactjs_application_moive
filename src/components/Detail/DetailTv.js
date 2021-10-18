import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailViewTv from "components/Detail/DetailViewTv.js";
import { BrowserRouter as Router, useParams } from "react-router-dom";

function DetailTv() {
	const [data, setData] = useState([]);
	let { id } = useParams();

	// detail  tvshow
	useEffect(() => {
		const fetchData = async () => {
			const tvlist = await axios.get(`tv/${id}?&language=en-US`);
			setData(tvlist.data);
			console.log("Tv:", tvlist.data);
		};
		fetchData();
	}, [id]);
	return (
		<DetailViewTv datadetailtv={data} />
		);
}
export default DetailTv;