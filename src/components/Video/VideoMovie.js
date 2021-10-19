import React , {useState,useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, useParams} from 'react-router-dom';
import VideoView from 'components/Video/VideoView.js';

export default function VideoMovie() {
	const [data, setData] = useState([]);
	let { id } = useParams();
	// su dung {id} truyen vao cho route
	useEffect(() => {
		const fetchData = async () => {
			const detail = await axios.get(`movie/${id}/videos?&language=en-US`);
			const newdata = detail.data.results.slice(0, 1);
			if (newdata.length > 0) {
				// check điều kiện chiều dài của mảng mới > 0 thì set
			}
			setData(newdata);
		};
		fetchData();
	}, [id]);
	return(
		<div className="info">
		<VideoView videomoviedata={data} />
		</div>
		);
}