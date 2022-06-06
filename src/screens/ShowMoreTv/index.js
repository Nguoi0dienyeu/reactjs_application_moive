import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import Footer from 'components/Footer/';
import Navigations from 'components/Navigations/header.js';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
	root: {
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

function ShowmoreTv() {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [totalpage, setTotalpage] = useState();
	const classes = useStyles();

	useEffect(() => {
		const fetchData = async () => {
			const tvlist = await axios.get("/tv/popular?");
			setData(tvlist.data.results);
			setTotalpage(tvlist.data.total_pages);
		};
		fetchData();
	}, []);

	const handleChange = (event, value) => {
		setPage(value);
	};

	useEffect(() => {
		const fetchData = async () => {
			const tvlist = await axios.get(`/tv/popular?&page=${page}`);
			setData(tvlist.data.results);
		};
		fetchData();
	}, [page]);
	return (
		<div className="App">
			<div className="container-flud">
				<Navigations />
				<div id="container">
					<div className="top-movies">
						<h1>Tv Show Popular</h1>
						<p>Newest update tv top trending</p>
						<div className="watch-tv">
							{data.map((items, index) => (
								<div className="row-tv" key={index}>
									<Link to={`/tv/${items.id}`}>
										<img
											className="img-tv"
											src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${items.poster_path}`}
											alt="tvshow"
										/>
									</Link>
									<div className="imdb">
										<div className="i-imdb">{items.vote_average}</div>
									</div>
									<p className="title">
										<Link to={`/tv/${items.id}`}>{items.name}</Link>
									</p>
									<p class="title2">
										{new Date(items.first_air_date).getFullYear()}
									</p>
								</div>
							))}
						</div>
						<div className={classes.root}>
							<Pagination
								count={totalpage}
								page={page}
								onChange={handleChange}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ShowmoreTv;