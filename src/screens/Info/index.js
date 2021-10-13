import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import DetailTitle from 'components/DetailTitle';
import Cast from 'components/Cast';
import Navigations from 'components/Navigations/header.js';
import Footer from 'components/Footer';

export default function Details() {
	const [data, setData] = useState([]);
	let { id } = useParams();
	// su dung {id} truyen vao cho route
	// movies
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
// tvshow
	useEffect(()=>{
		const fetchData = async() => {
			const detail = await axios.get(`tv/${id}/videos?&language=en-US`);
			const newdata = detail.data.results.slice(0,1);
		  // tv_id
		  if (newdata.length > 0) {
		  }
		  setData(newdata);
    }
		fetchData();
	},[id]);

	const EmberYoutube = ({ emberKey }) => (
		<div className="video-responsive" key="index">
			<iframe
				width="1200"
				height="510"
				name="Offical Trailer"
				src={`https://www.youtube.com/embed/${emberKey}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				site="Youtube"
				title="EmberVideo youtube"
			/>
		</div>
	);

	return (
		<div className="App">
			<div className="container-flud">
				<Navigations />
				<div className="main-video">
					<div className="video">
						<div className="title">
							<h1 className= "top">Watching</h1>
							<div className="info">
								{data.map((items, index) => (
									<EmberYoutube emberKey={items.key} />
								))}
							</div>
							<DetailTitle />
						</div>
					</div>
				</div>
        <Cast />
			</div>
			<Footer />
		</div>
	);
}