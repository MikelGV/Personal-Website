import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import { useTable } from 'react-table'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom"
import './index.css';
import Header from './components/navbar/navbar';
import Footer from './components/footer/footer';
import MyWork from './components/myWork/myWork';
import PopularProjects from './components/popularProjects/popularProjects';
import Contact from './pages/contact/contact';

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
// Main app
export default class App extends React.Component {
	render () {
		return (
			<Router>
				<Header/>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/contact" component={Contact} />
				</Switch>
				<Footer/> 
			</Router>
		)
	}
}
