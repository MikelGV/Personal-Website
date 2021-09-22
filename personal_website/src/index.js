import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Header extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg fixed-top">
					<div className="container">
						<div className="collapse navbar-collapse">
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
			<div class="d-flex flex-row align-items-center footer shadow-lg mt-4">
				<p class="m-auto">Stay Connected</p>
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
							"Self-taught software developer through research & development."
						</h5>
					</div>
				</div>
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
