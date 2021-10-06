import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import axios from "axios";
import CastTv from 'components/CastTv/';

export default function DetailTitleTv() {
	const [data, setData] = useState([]);
	let { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const titles = await axios.get(`tv/${id}?&language=en-US`);
			setData(titles.data);
		};
		fetchData();
	}, []);

	return (
		<div className="title-detail">
			<div className="sub-info">
				<div className="sub-img">
					<img
						src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${data.poster_path}`}
						alt="info"
					/>
				</div>
				<div className="sub-text">
					<h1>{data.name}</h1>
					
					<p>
						<label>Release Date:</label>
						<span>{data.last_air_date}</span>
					</p>
					<p>
						<label>Genres:</label>
						{data.genres &&
							data.genres.map((items) => <span>{items.name}</span>)}
					</p>
					<p>
						<label>Season: </label>
						<span>{data.number_of_seasons}</span>
					</p>
					<p>
						<label>Espisode:</label>
						<span>{data.number_of_episodes}</span>
					</p>
					<p>
						<label>Language:</label>
						<span>{data.languages}</span>
					</p>
					<p>
						<label>IMDB rating: </label>
						<span>{data.vote_average}</span>
					</p>
					<p>
						<label>New Season: </label>
						<span>Update...</span>
					</p>
					<p>
					<CastTv />
					</p>
					<div className="overview">
						<hr />
						<p className="overview-txt">{data.overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
}