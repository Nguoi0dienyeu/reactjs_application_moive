import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
export default function Details() {
	return (
		<>
		<Router>
			<Switch>
				<Route path="/detail">
					<Movies />
				</Route>
			</Switch>
		</Router>
		</>
	);
}

function Movies() {
	let { path, url } = useRouteMatch();
	console.log("Params: path:",path);
	console.log("Params: Url:",url);
	return (
		<div>
			<h2>Watching Trailer newst</h2>
			<Link to={`${url}/12345`}>Rending Detail </Link>
			<Switch>
				<Route path={`${path}/:showid`}>
					<MoviesID />
				</Route>
			</Switch>
		</div>
	);
}

function MoviesID() {
	let { showid } = useParams();
	return <h3>{showid}</h3>;
}