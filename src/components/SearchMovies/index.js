import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function SearchMovies() {
	return (
		<Router>
			<Switch>
				<Route path="/showmore"></Route>
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
						<div>
							<p className="title">Laster Trailer</p>
						</div>
						<div className="later-trailer">
							<div className="trailer">
								<img
									src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg"
									alt="What If"
								/>
								<svg
									id="glyphicons-basic"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 32 32"
								>
									<path
										id="play"
										d="M24.8175,16.86432,9.503,25.77667A1,1,0,0,1,8,24.91235V7.08765a1,1,0,0,1,1.503-.86432L24.8175,15.13568A1.00006,1.00006,0,0,1,24.8175,16.86432Z"
									/>
								</svg>
							</div>
							<div className="trailer">
								<img
									src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/oKxrDdG0SfmWRtJYmreK4rjDMUo.jpg"
									alt="tokyo"
								/>
								<svg
									id="glyphicons-basic"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 32 32"
								>
									<path
										id="play"
										d="M24.8175,16.86432,9.503,25.77667A1,1,0,0,1,8,24.91235V7.08765a1,1,0,0,1,1.503-.86432L24.8175,15.13568A1.00006,1.00006,0,0,1,24.8175,16.86432Z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</Switch>
		</Router>
	);
}

export default SearchMovies;