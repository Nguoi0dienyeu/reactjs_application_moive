import React, { useRef } from 'react';
import { useDetectOutsideClick } from 'components/Navigations/useDetectOutsideClick.js';
import HomePage from 'screens/HomePage/homepage.js';

function Navigations() {
	const imageEL = useRef(null);
	const [isActive, setIsActive] = useDetectOutsideClick(imageEL, true);
	const onButtonClick = () => setIsActive(!isActive);
	return (
		<>
			<div className="nav">
				<img src="logo512.png" alt="lgoo" />
				<div
					id="nav-second"
					ref={imageEL}
					className={`mobile ${isActive ? 'active' : 'inactive'}`}
				>
					<ul className="first-menu">
						<li>
							<a href="">Home</a>
						</li>
						<li>
							<a href="">Favourtis</a>
						</li>
						<li>
							<a href="">Tv Show</a>
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
		</>
	);
}

export default Navigations;