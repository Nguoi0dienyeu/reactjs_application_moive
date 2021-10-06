import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Navigations from 'components/Navigations/header.js';
import DetailTitleTv from 'components/DetailTitleTv/';
import {BrowserRouter as Router ,useParams} from 'react-router-dom';
import Footer from 'components/Footer/';

export default function DetailTv() {
	const [data,setData]  = useState([]);
	let {id} = useParams();

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
					<h1 className="top">Watching</h1>
					</div>
					<div className="info">
					{data.map((items,index)=>(
						<EmberYoutube emberKey={items.key} />
					))}
					</div>
					<DetailTitleTv />
				</div>
			</div>
		</div>
		<Footer />
		</div>
	);
}