import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Header extends React.Component {
	render() {
		return (
			<div>
				<nav id="gobla-nav" className="navbar navbar-expand-lg fixed-top scrolled-nav">
					<div className="container">
						<div className="collapse navbar-collapse scrollN unscrolledLink">
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="/software">Software</a></li>
							<li><a href="/gear">Gear</a></li>
						</ul>
						<div className="d-flex flex-row-reverse flex-grow-1">
								<ul>
								<li>
									<a href="/contact">Contact</a>
								</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

class Footer extends React.Component {
	render() {
		return(
			<div className="d-flex flex-row align-items-center footer shadow-lg mt-4">
				<p className="m-auto">Stay Connected</p>
			</div>
		)
	}
}

class AboutMe extends React.Component {
	render() {
		return(
			<div className="aboutsection">
				<div id="about" className="content-wrapper">
					<h1>About me</h1>
					<p>I've always sought out opportunities and challenges that are meaningful to me. I've never stopped engaging my passion to 
						help others and solve problems. As a Software developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my
						mission-driven work ethic to literally change the world. That's why I'm excited to make big impact at a high growth company.
					</p>
        		</div>
			</div>
		)
	}
}

class PopularProjects extends React.Component {
	render() {
		return(
			<div className="popular">
				<h4>Popular projects</h4>
				<div>
					<div>
						<table class="table">
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
										<a href="https://github.com/MikelGV/SudokuSolver" className="plainLink">SudokuSolver</a>
									</td>
									<td>Sudoku game using pygame and using backtracking algorithm to solve the sudoku</td>
									<td>Python</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
        	</div>
		)
	}
}


class Main extends React.Component {
	render () {
		return (
			<div className='main'>
				<Header/>
				<div className='Image'>
					<div className='center arial'>
						<h1 className='titleMain'>Mikel Galdos</h1>
						<h5>
							Self-taught software developer through research & development.
						</h5>
					</div>
				</div>
				<AboutMe/>
				<PopularProjects/>
				<Footer/>
			</div>
		)
	}
}

class App extends React.Component {
	render () {
		return (
			<div>
				<Main/>
			</div>
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
