import React from "react";
import VideoMovie from "components/Video/VideoMovie.js";

export default function VideoView(props) {
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
	// videotvdata ,,videomoviedata
	return (
		<div className="info">
			{props.videomoviedata &&
				props.videomoviedata.map((items, index) => (
					<EmberYoutube emberKey={items.key} />
				))}
		</div>
	);
}