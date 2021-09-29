import React, {useState, useEffect} from 'react';
import ReactDOM, { render } from 'react-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom"
import './index.css';
import reportWebVitals from './reportWebVitals';

function Header() {
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
							<li>
								<Link to="/software">Software</Link>
							</li>
							<li>
								<Link to="/blog">Blog</Link>
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

function Footer() {
	return(
		<div className="d-flex flex-row align-items-center footer shadow-lg mt-4">
			<p className="m-auto">Stay Connected</p>
		</div>
	)
}

function MyWork()  {
	return(
		<div className="worksection">
			<div className="content-wrapper">
				<h1>My work</h1>
				<p>I've always sought out opportunities and challenges that are meaningful to me. I've never stopped engaging my passion to 
					help others and solve problems. As a Software developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my
					mission-driven work ethic to literally change the world. That's why I'm excited to make big impact at a high growth company.
				</p>
				<div className="col-lg-3">
					<h5>Software Development</h5>
					<ul>
						<li>
							microservices, APIs, full stack web apps
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
	
}

function PopularProjects(){
	return(
		<div className="popular">
			<h4>Popular projects</h4>
			<div>
				<div>
					<table className="table">
						<thead >
							<tr>
								<th>Title</th>
								<th>Description</th>
								<th>Language</th> 
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<a href="https://github.com/MikelGV/chatMe" className="plainLink">chatMe</a>
								</td>
								<td>
									Chat Application build in django and django-channels as websocket
								</td>
								<td>Python</td>
							</tr>
							<tr>
								<td>
									<a href="https://github.com/MikelGV/SudokuSolver" className="plainLink">Sudoku Solver</a>
								</td>
								<td>Sudoku game using pygame and using backtracking algorithm to solve the sudoku</td>
								<td>Python</td>
							</tr>
							<tr>
								<td>
									<a href="https://github.com/MikelGV/WeatherApp" className="plainLink">Weather App</a>
								</td>
								<td>Weather app build in flask using the openWeather API</td>
								<td>Python</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
	
}
function Home() {
	return(
		<Router>
			<div className='main'>
				<div className='Image'>
					<div className='center arial'>
						<h1 className='titleMain'>Mikel Galdos</h1>
						<h5>
							Self-taught software developer through research & development.
						</h5>
					</div>
				</div>
			</div>
			<MyWork/>
			<PopularProjects/>
		</Router>
	)
}
// other tabs
function Software() {
	return(
		<div className="softwareDiv">
			<h1>Software</h1>
		</div>
	)
}

function Blog() {
	return(
		<div>
			<h1>Gear</h1>
		</div>
	)
}

function AboutMe() {
	return(
		<div>
			<h1>About Me</h1>
		</div>
	)
}

function Contact() {
	return(
		<div>
			<h1>Contact</h1>
		</div>
	)
}

// Main app
class App extends React.Component {
	render () {
		return (
			<Router>
				<Header/>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/software" component={Software}/>
					<Route path="/blog" component={Blog} />
					<Route path="/about" component={AboutMe} />
					<Route path="/contact" component={Contact} />
				</Switch>
				<Footer/> 
			</Router>
		)
	}
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
