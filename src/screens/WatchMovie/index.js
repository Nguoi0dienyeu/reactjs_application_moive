import React from "react";
import VideoMovie from "components/Video/VideoMovie.js";
import DetailMovie from "components/Detail/DetailMovie.js";
import CastMovie from "components/Cast/CastMovie.js";
import Navigations from 'components/Navigations/header.js';
import Footer from 'components/Footer';

function WatchMovie() {
	return (
		<div className="App">
			<div className="container-flud">
				<Navigations />
				<div className="main-video">
					<div className="video">
						<div className="title">
							<h1 className="top">Watching</h1>
							<div className="info">
								<VideoMovie />
								<DetailMovie />
							</div>
						</div>
					</div>
				</div>
				<CastMovie />
			</div>
			<Footer />
		</div>
	);
}
export default WatchMovie;