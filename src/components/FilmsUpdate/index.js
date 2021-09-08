import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function FilmsUpdate() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				'https://api.themoviedb.org/3/movie/now_playing?api_key=e7d1a25f4b340e09aa16db0f949d2a5e'
			);
			const items = result.data.results.splice(4, 20);
			setData(result.data.results);
		};
		fetchData();
	}, []);

	return (
		<>
		<Router>
			<div className="container">
				<div className="title">
					<p className="title-left">Film Update</p>
					<p className="title-right">
						<Link to = "/showmore"><a href="">Show More...</a></Link>
					</p>
				</div>
				<Switch>
					<Route path = "/showmore">
						<ShowMore />
					</Route>	
				</Switch>
				<div className="content">
					<div className="content-film">
						{data.map((items, index) => (
							<div className="watch" key={index}>
								<img
									src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${items.poster_path}`}
									alt="content"
								/>
								<div className="btn-w-f">
									<button className="content-w">Watch</button>
									<button className="content-w">Favourtis</button>
								</div>
								<div className="sub-title">
									<p>
										<a href="#">{items.title}</a>
									</p>
									<p>Year: {new Date(items.release_date).getFullYear()}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Router>
		</>
	);
}

function ShowMore() {
		return <h1>Show tv</h1>;
	}


export default FilmsUpdate;