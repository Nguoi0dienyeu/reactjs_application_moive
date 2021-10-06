import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailTitle() {
	const [data, setData] = useState([]);
	let { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const titles = await axios.get(`movie/${id}?&language=en-US`);
			setData(titles.data);
		};
		fetchData();
	}, []);
console.log("Data nhân được:",data);
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
						<h1>{data.title}</h1>
					<p>
						<label>Release Date:</label><span>{data.release_date}</span>
					</p>
					<p>
						<label>Language:</label>
						{data.spoken_languages?data.spoken_languages.map(items => <span>{items.name}</span>):null}
					</p>
					<p>
						<label>Genres:</label>
						{data.genres?data.genres.map(items => <span>{items.name}</span>):null}
					</p>
					<p>
						<label>Status :</label><span>{data.status}</span>
					</p>
					<p>
						<label>IMDB rating: </label><span>{data.vote_average}</span>
					</p>
					<div className="overview">
					<hr/>
					<p className="overview-txt">
						{data.overview}
					</p>
					</div>
				</div>
			</div>
		</div>
	);
}