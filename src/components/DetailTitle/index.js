import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailTitle() {
	const [data, setData] = useState([]);
	console.log('data is:', data);
	let { id } = useParams();
	useEffect(() => {
		const fetchData = async () => {
			const titles = await axios.get(`movie/${id}?>&language=en-US`);
			setData(titles.data);
			console.log('Get Details:', titles.data);
		};
		fetchData();
	}, []);

	return (
		<>
		<div className="title-detail">
				<div className="sub-info">
					<p>Title Film:</p>
					<p>OverView:</p>
					<p>Actor:</p>
					<p>Director:</p>
					<p>Gener:</p>
					<p>Release year:</p>
					<p>IMDB rating:</p>
				</div>
		</div>
		</>
	);
}