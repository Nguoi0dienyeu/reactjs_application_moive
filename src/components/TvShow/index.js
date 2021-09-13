import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

export default function TvShow() {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				'https://api.themoviedb.org/3/tv/popular?api_key=e7d1a25f4b340e09aa16db0f949d2a5e&language=en-US'
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
					<Route path="/showmore">
					</Route>
					<Route path="/showmoretv">
						<ShowmoreTv />
					</Route>
					<div className="tv">
						<div className="title-tv">
							<p className="title-left">tv show</p>
							<p className="title-right">
								<Link to="/showmoretv">
									<a href="">all tv show >> </a>
								</Link>
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

const useStyles = makeStyles((theme) => ({
	root: {
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

function ShowmoreTv() {
	const [data, setData] = useState([]);
	const [page,setPage] = useState(1);
	const classes = useStyles();

	useEffect(() => {
		const fetchData = async () => {
			const tvlist = await axios.get(
				'https://api.themoviedb.org/3/tv/popular?api_key=e7d1a25f4b340e09aa16db0f949d2a5e&language=en-US'
			);
			setData(tvlist.data.results);
			console.log('List Data tvshow:', tvlist.data.results);
		};
		fetchData();
	}, []);

 const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
		const fetchData = async () => {
			const tvlist = await axios.get(
				`https://api.themoviedb.org/3/tv/popular?api_key=e7d1a25f4b340e09aa16db0f949d2a5e&language=en-US&page=${page}`
			);
			setData(tvlist.data.results);
			console.log('List Data tvshow:', tvlist.data.results);
		};
		fetchData();
	}, [page]);
	return (
		<>
			<div id="container">
				<div className="top-movies">
					<h1>Tv Show Popular</h1>
					<p>Newest update tv top trending</p>
					<div className="watch-tv">
						{data.map((items, index) => (
							<div className="row-tv" key={index}>
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
					<div className={classes.root}>
						<Pagination count={70} page={page} onChange={handleChange} />
					</div>
				</div>
			</div>
		</>
	);
}