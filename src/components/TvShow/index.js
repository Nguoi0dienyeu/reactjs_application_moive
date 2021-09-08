import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

function TvShow() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				'https://api.themoviedb.org/3/tv/popular/?api_key=e7d1a25f4b340e09aa16db0f949d2a5e&language=en-US&page=1'
			);
			const items = result.data.results.splice(6, 20);
			setData(result.data.results);
		};
		fetchData();
	}, []);
	return (
		<>
		<Router>
		<Switch>
			<Route path = "/showmore">
				<ShowMore/>
			</Route>
			<div className="tv">
				<div className="title-tv">
					<p className="title-left">tv show</p>
					<p className="title-right">
						<a href="">all tv show >> </a>
					</p>
				</div>
				<div className="tv-show">
					{data.map((items, index) => (
						<div className="row" key={index}>
							<img
								className="img-tv"
								src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${items.poster_path}`}
								alt="tvshow"
							/>
							<p className="title">
								<a href="">{items.name}</a>
							</p>
							<p clas="title2">
								{new Date(items.first_air_date).getFullYear()}
							</p>
						</div>
					))}
				</div>
			</div>
			</Switch>
			</Router>
		</>
	);
}
function ShowMore() {
	return <h1>1</h1>;
}

export default TvShow;