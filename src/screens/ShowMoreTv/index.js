import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigations from 'components/Navigations/header.js';
import Footer from 'components/Footer/';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
const useStyles = makeStyles((theme) => ({
	root: {
		'& > * + *': {
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
			const tvlist = await axios.get('/tv/popular?');
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
			console.log('List Data tvshow:', tvlist.data.results);
		};
		fetchData();
	}, [page]);
	return (
		<>
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
										<a href={`/detail/${items.id}`}>
										<img
											className="img-tv"
											src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${items.poster_path}`}
											alt="tvshow"
										/>
										</a>
										<p className="title">
											<a href={`/detail/${items.id}`}>{items.name}</a>
										</p>
										<p clas="title2">
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
		</>
	);
}

export default ShowmoreTv;