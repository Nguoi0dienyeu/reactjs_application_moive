import React from 'react';
export default function Details() {
	return (
		<div className="main-video">
			<div className="video">
				<div className="title">
					<h1>Watching</h1>
				</div>
				<img src="https://www.themoviedb.org/t/p/original/6s1KfGZINuUoIgWyeVT2ehxUrvP.jpg" alt="sang-chi"/>
				<div className="info">
					<div className="sub-info">
						<p>Title Film:<label>Shang-Chi and the Legend of the Ten Rings</label></p>
						<p>Actor:<label>Destin Daniel Cretton, David Callaham</label></p>
						<p>Director:<label>Destin Daniel Cretton</label></p>
						<p>Gener:<label>Action</label></p>
						<p>Release year: <label>September 2021</label></p>
						<p>IMDB rating:<label>8.5</label></p>
					</div>
				</div>
			</div>
		</div>
	);
}