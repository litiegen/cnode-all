import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import Sidebar from './sidebar';
import './App.css';
import Routes from './routes';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render(){
		return (
			<div className="App">
				<div className="App-header navbar">
					<Header />
				</div>
				
				<div className="App-content">
					<div className="sidebar">
						<Sidebar />
					</div>
					<div className="content">
						<Routes />
					</div>
				</div>
				
				<div className="App-under">
					<div className="under">
						<Footer />
					</div>
				</div>
			</div>
		)}
}
export default App;
