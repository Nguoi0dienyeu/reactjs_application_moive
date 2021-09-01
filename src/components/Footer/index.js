import React  from 'react';

function TvShow() {

	return (
		<footer id = "site-footer">
			<div className = "fot-container">
				<div className = "left-fot">
					<img src="image/logo512.png" alt="logo footer"/>
					<p className = "address">9067 Zurich, Switzerland 87</p>
					<p className = "address">abc@gmail.com</p>
					<p className = "address">0974280876</p>
				</div>
				<div className = "center-fot">
					<h1>Custom Services</h1>
					<ul className = "three-menu">
						<li><a href="">Home</a></li>
						<li><a href="">Watch Online</a></li>
						<li><a href="">Tv Show</a></li>
					</ul>
				</div>
				<div className ="socials">
					<h1>Socials</h1>
					<div className = "link">
						<label className = "link-font"><a href="">f</a></label>
						<label className = "link-font"><a href="">i</a></label>
						<label className = "link-font"><a href="">t</a></label>
					</div>
					<div className ="confirm">
						<input className ="email-con" type="text" placeholder = "Your Email Address" name = "email" required/>
						<label className = "email-font" type  ="submit" ><a href="">Send</a></label>
					</div>
				</div>
			</div>
				<div className = "copyright">
					<p className = "title">Copyright Moviek</p>
					<p className = "title">Design Reactjs 2021</p>
				</div>
		</footer>
	);
}
export  default TvShow;