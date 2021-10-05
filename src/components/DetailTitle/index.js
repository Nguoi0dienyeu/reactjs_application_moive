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
			console.log("'Nhận thông tin video:'", titles.data);
		};
		fetchData();
	}, []);

	return (
		<div className="title-detail">
			<div className="sub-info">
				<p>
					Title:<label>{data.title}</label>
				</p>
				<p>
					Overview:<label>{data.overview}</label>
				</p>
				<p>
					Release Date:<label>{data.release_date}</label>
				</p>
				<p>
					Language: <label>{data.original_language}</label>
				</p>
				<p>
					Rate imdb: <label>{data.vote_average}</label>
				</p>
			</div>
		</div>
	);
}