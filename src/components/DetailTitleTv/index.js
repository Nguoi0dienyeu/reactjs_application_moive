import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailTitleTv() {
	const [data, setData] = useState([]);
	let { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const titles = await axios.get(`tv/${id}?&language=en-US`);
			setData(titles.data);
			console.log("'Nhận thông tin tvshow:'", titles.data);
		};
		fetchData();
	}, []);

	return (
		<div className="title-detail">
			<div className="sub-info">
				<p>
					Title:<label>{data.name}</label>
				</p>
				<p>
					Overview:<label>{data.overview}</label>
				</p>
				<p>
					Release Date:<label>{data.last_air_date}</label>
				</p>
				<p>
					Language: <label></label>
				</p>
				<p>
					Rate imdb: <label>{data.vote_average}</label>
				</p>
			</div>
		</div>
	);
}