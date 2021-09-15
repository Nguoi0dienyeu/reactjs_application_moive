import React, { useEffect, useState } from 'react';
import axios from 'axios';
function capture() {
	var video = document.getElementById('video');
}
function Details() {
	const [datavideo, setDataVideo] = useState([]);

	useEffect(() => {
		const fetchVideo = async () => {
			const result = await axios.get(
				'https://api.themoviedb.org/3/movie/588228/videos?api_key=e7d1a25f4b340e09aa16db0f949d2a5e&language=en-US'
			);
			setDataVideo(result.datavideo);
			console.log('Get Video API tmdb', result.datavideo);
		};
		fetchVideo();
	}, []);
	return (
		<div className="detail-container">
			<div className="content">
				<div className="title">
					<h1>Watching</h1>
				</div>
				<div className="video">
					<video
						id="video"
						width ="1200"
						height = "500"
						src="http://www.w3schools.com/html/mov_bbb.mp4"
						type="video/mp4"
						controls
					></video>
				</div>
				<div className="info">
					<p>Title Film</p>
					<div className="sub-info">
						<p>Actor:</p>
						<p>Director:</p>
						<p>Gener:</p>
						<p>Release year:</p>
						<p>IMDB rating:</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Details;