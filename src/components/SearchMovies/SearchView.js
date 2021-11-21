import React, { useState } from "react";
function SearchView(props) {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResult, setResult] = useState([]);

	const onChange  = e => {
		setSearchTerm(e.target.value);
		console.log("SearchMovies:",e.target.value);
	};
	const onSubmit = () => {
		if (searchTerm.trim() === "") {
			return;
			console.log("Khong co ky tu duoc nhap");
		}
		setSearchTerm("");
	};
	return (
		<div id="search-nor">
			<div className="row">
				<p className="title">Searching Now</p>
				<select className="year">
					<option className="op">Choice year</option>
					<option value="2017">2017</option>
					<option value="2018">2018</option>
					<option value="2019">2019</option>
					<option value="2020">2020</option>
					<option value="2020">2021</option>
				</select>
				<select className="action">
					<option>Choice genres</option>
					<option value="11">Action</option>
					<option value="12">Tv Series</option>
					<option value="13">Detective</option>
					<option value="14">Honor</option>
					<option value="15">Anime</option>
				</select>
				<div className="search-second">
					<input className="box-search" 
					placeholder="Movie Searching.." 
					onChange={onChange}
					onSubmit={onSubmit}
					value={searchTerm}
					/>
					<ul className="found">
						{props.find && props.find.map((items,index) =>(
								<li>{items.name}</li>
							))}
					</ul>
				</div>
			</div>
			<div className="row-right">
				<div className="title-right">
					<p className="title">Laster Trailer</p>
				</div>
				<div className="later-trailer">
					<div className="trailer">
						<div className="trailer">
							<a href="https://www.themoviedb.org/tv/91363-what-if">
								<img
									src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg"
									alt="what if"
								/>
							</a>
						</div>
						<div className="trailer">
							<a href="https://www.themoviedb.org/tv/80752-see">
								<img
									src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/oKxrDdG0SfmWRtJYmreK4rjDMUo.jpg"
									alt="see"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SearchView;