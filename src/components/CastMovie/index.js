import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, useParams} from 'react-router-dom';

export default function CastMovie() {
	const [data, setData] = useState([]);
	let {id} = useParams();
	useEffect(() => {
		const fetchData = async() => {
			const detail = await axios.get(`movie/${id}/credits?&language=en-US`);
			if (data.length == null) {
			}
			setData(detail.data.cast);
			console.log("Data api credits:",detail.data);
		};
		fetchData();
	}, []);
	return (
		<div className="character">
			<label>Cast:</label>
			{data.map((items) => <span>{items.original_name}</span>)}
		</div>
		);
}