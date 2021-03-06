import React from 'react';
function SearchMovies() {
	return (
			<div id="search-nor">
				<div className="row">
					<p className="title">Searching Now</p>
					<select className="year">
						<option className="op">Select Year</option>
						<option value="2017">2017</option>
						<option value="2018">2018</option>
						<option value="2019">2019</option>
						<option value="2020">2020</option>
					</select>
					<select className="action">
						<option>Select Movies</option>
						<option value="11">Action</option>
						<option value="12">Series Movie</option>
						<option value="13">Detective Movie</option>
						<option value="14">Honor</option>
					</select>
					<div className="search-second">
						<input className="box-search" placeholder="Movie Searching.." />
					</div>
				</div>
				<div className="row-right">
					<div className="title-right">
						<p className="title">Laster Trailer</p>
					</div>
					<div className="later-trailer">
						<div className="trailer">
							<img
								src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg"
								alt="What If"
							/>
						</div>
						<div className="trailer">
							<img
								src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/oKxrDdG0SfmWRtJYmreK4rjDMUo.jpg"
								alt="tokyo"
							/>
						</div>
					</div>
				</div>
			</div>
	);
}

export default SearchMovies;