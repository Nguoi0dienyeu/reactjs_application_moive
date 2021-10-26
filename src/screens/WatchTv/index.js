import React from 'react';
import VideoTv from 'components/Video/VideoTv.js';
import DetailTv from 'components/Detail/DetailTv.js';
import CastTv from 'components/Cast/CastTv.js';
import Navigations from 'components/Navigations/header.js';
import Footer from 'components/Footer';

function WatchTv() {
	return (
		<div className="App">
			<div className="container-flud">
				<Navigations />
				<div className="main-video">
					<div className="video">
						<div className="title">
							<h1 className="top">Watching</h1>
							<div className="info">
							<VideoTv />
							<DetailTv />
							</div>
						</div>
					</div>
				</div>
				<CastTv />
			</div>
			<Footer />
		</div>
		);
}
export default WatchTv;