import React from "react";
import logo from "image/logo.png";
import location from "image/location.png";
import email from "image/email.png";
import phone from "image/phone.png";

function Footer() {
	return (
		<footer id="site-footer">
			<div className="fot-container">
				<div className="fot-header">
					<div className="header-logo">
						<a href="/">
							<img src={logo} alt="logo footer" />
						</a>
							<div className="header-add">
								<p><img src={location} alt=""/>9067 Zurich, Switzerland 87</p>
								<p><img src={email} alt=""/>abc@gmail.com</p>
								<p><img src={phone} alt=""/>84 974280876</p>
							</div>
					</div>
					<div className="three">
						<h1>Custom Services</h1>
						<ul className="three-menu">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Watch Online</a>
							</li>
							<li>
								<a href="/">Tv Show</a>
							</li>
						</ul>
					</div>
					<div className="socials">
						<h1>Contact Us</h1>
						<div className="link">
							<label><a href="/">f</a></label>
							<label><a href="/">i</a></label>
							<label><a href="/">t</a></label>
							<label><a href="/">s</a></label>
						</div>
						<div className="confirm">
							<input
								className="email-con"
								type="text"
								placeholder="Your Email Address"
								name="email"
								required
							/>
							<label className="email-font" type="submit">
								<a href="/">Send</a>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright">
				<p className="title">Copyright Moviek</p>
				<p className="title">Design Reactjs 2021</p>
			</div>
		</footer>
	);
}
export default Footer;