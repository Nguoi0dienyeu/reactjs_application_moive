import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BrowserRouter as Router, useParams } from "react-router-dom";

function SimpleSlider() {
	const [data, setData] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		const fetchData = async () => {
			const detail = await axios.get(`movie/${id}/credits?&language=en-US`);
			setData(detail.data.cast);
		};
		fetchData();
	}, [id]);

	return (
		<section>
			<div className="cast-crew">
				<p>Cast and Character</p>
			</div>
			<div className="box-people">
				{data.map((items, index) => (
					<div className="people_img" key={index}>
						<img
							className="profile"
							src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${items.profile_path}`}
							alt="cast"
						/>
						<div className="cast_txt">
							<p className="txt">
								<a href="">{items.original_name}</a>
							</p>
							<p className="txt">{items.character}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
export default function CastMovie() {
	return <SimpleSlider />;
}