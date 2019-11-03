import React, { Component } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import Home from '../home';
import Post from '../post';
import Guides from '../guides';
import API from '../api';
import About from '../about';
import Nomatch from '../nomatch';
import Login from '../login';
import Forget from '../Forget'

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/getstart" component={Guides}/>
				<Route exact path="/api" component={API}/>
				<Route exact path="/about" component={About}/>
				<Route exact path="/tag/:type" component={Home}/>
				<Route exact path="/topic/:postId" component={Post}/>
				<Route exact path="/login" component={Login}/>
				<Route exact path="/forget" component={Forget}/>
				<Route exact path="/nomatch" component={Nomatch}/>
				<Redirect to='/nomatch'/>
			</Switch>
		)}
}

export default Routes
