import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router,Link } from 'react-router-dom';
export default function TvShow() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get('/tv/popular?');
			const removed = result.data.results.splice(6, 20);
			setData(result.data.results);
			console.log('Removed Movie:', removed);
		};
		fetchData();
	}, []);
	return (
		<>
			<div className="tv">
				<div className="title-tv">
					<p className="title-left">tv show</p>
					<p className="title-right">
						<Link to="/tvshow">all tv show >> </Link>
					</p>
				</div>
				<div className="tv-show">
					{data.map((items, index) => (
						<div className="row" key={index}>
							<a href={`/tvshow/${items.id}`}>
							<img
								className="img-tv"
								src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${items.poster_path}`}
								alt="tvshow"
							/>
							</a>
							<p className="title">
								<a href={`/tvshow/${items.id}`}>{items.name}</a>
							</p>
							<p clas="title2">
								{new Date(items.first_air_date).getFullYear()}
							</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}