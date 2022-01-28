import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 60) {
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	}

	window.addEventListener('scroll', changeBackground)

	return (
		<div>
			<nav id="gobla-nav" className={navbar ? "navbar navbar-expand-lg fixed-white" : "navbar navbar-expand-lg fixed-top"}>
				<div className="container">
					<div className="collapse navbar-collapse scrollN unscrolledLink">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About Me</Link>
							</li>
						</ul>
						<div className="d-flex flex-row-reverse flex-grow-1">
								<ul>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
								</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}