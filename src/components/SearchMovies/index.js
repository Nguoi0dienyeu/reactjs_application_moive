import React  from 'react';

function SearchMovies() {

	return (
		<div id = "search-nor">
			<div className = "row">
			<p className = "title">Searching Now</p>
				<select className = "year">
					<option className = "op" >Select Year</option>
					<option value="2017">2017</option>
					<option value="2018">2018</option>
					<option value="2019">2019</option>
					<option value="2020">2020</option>
				</select>
				<select className = "action">
					<option>Select Movies</option>
					<option value="11">Action</option>
					<option value="12">Series Movie</option>
					<option value="13">Detective Movie</option>
					<option value="14">Honor</option>
				</select>
				<div className = "search-second">
					<input className = "box-search" placeholder = "Movie Searching.."/>
				</div>
			</div>
			<div className = "row-right">
			<p className = "title">Nominated movie</p>
				<img src="image/qc3.jpg" alt="qc3"/>
			</div>
		</div>
	);
}
export  default SearchMovies;