import React, { useRef } from 'react';
import { useDetectOutsideClick } from 'components/Navigations/useDetectOutsideClick.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from 'screens/HomePage/homepage.js';

function Navigations() {
	const imageEL = useRef(null);
	const [isActive, setIsActive] = useDetectOutsideClick(imageEL, true);
	const onButtonClick = () => setIsActive(!isActive);
	return (
		<>
			<Router>
					<div className="nav">
						<Link to="/">
							<img src="logo512.png" alt="lgoo" />
						</Link>
						<div
							id="nav-second"
							ref={imageEL}
							className={`mobile ${isActive ? 'active' : 'inactive'}`}
						>
							<ul className="first-menu">
								<li>
									<a href="/">Home</a>
								</li>
								<li>
									<a href="">Favourtis</a>
								</li>
								<li>
									<a href="/showmoretv">Tv Show</a>
								</li>
								<li>
									<a href="">Watch Online</a>
								</li>
							</ul>
							<input className="box-search" placeholder="Movie Searching.." />
						</div>
						<div className="menu-mobile">
							<button onClick={onButtonClick} className="text-w3">
								☰
							</button>
						</div>
					</div>
			</Router>
		</>
	);
}
export default Navigations;