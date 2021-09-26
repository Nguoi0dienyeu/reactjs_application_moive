import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import axios from 'axios';
import ShowMoreTv from 'screens/ShowMoreTv/index.js';

export default function TvShow() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				'/tv/popular?'
			);
			const removed = result.data.results.splice(6, 20);
			setData(result.data.results);
			console.log("Removed Movie:",removed);
		};
		fetchData();
	}, []);
	return (
		<>
			<Router>
				<Switch>
					<Route path="/movie"></Route>
					<Route path="/tvshow">
						<ShowMoreTv />
					</Route>
					<Route path="/details"></Route>
					<div className="tv">
						<div className="title-tv">
							<p className="title-left">tv show</p>
							<p className="title-right">
								<a href="/tvshow">all tv show >> </a>
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
										<Link to= {`/movie/${items.id}`}>{items.name}</Link>
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
