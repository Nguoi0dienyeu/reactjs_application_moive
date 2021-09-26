import React,{useState,useEffect} from 'react';
import axios from 'axios'; 
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
	const [page,setPage] = useState(1);
	const [totalpage,setTotalpage] = useState();
	const classes = useStyles();

	useEffect(() => {
		const fetchData = async () => {
			const tvlist = await axios.get(
				'/tv/popular?api_key=e7d1a25f4b340e09aa16db0f949d2a5e&language=en-US'
			);
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
			const tvlist = await axios.get(
				`/tv/popular?api_key=e7d1a25f4b340e09aa16db0f949d2a5e&language=en-US&page=${page}`
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
									<a href={`/movie/${items.id}`}>{items.name}</a>
								</p>
								<p clas="title2">
									{new Date(items.first_air_date).getFullYear()}
								</p>
							</div>
						))}
					</div>
					<div className={classes.root}>
						<Pagination count={totalpage} page={page} onChange={handleChange} />
					</div>
				</div>
			</div>
		</>
	);
}

export default ShowmoreTv;