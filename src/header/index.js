import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './index.css';

export default class index extends Component {
	render() {	
		return (
			<div className='header'>
				<header>
					<img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"></img>
					<div style={{float:'right'}}>
						<Link to='/'>首页</Link>
						<Link to='/getstart'>新手入门</Link>
						<Link to='/api'>API</Link>
						<Link to='/about'>关于</Link>
						<Link to='/nomatch'>注册</Link>
						<Link to='/login'>登录</Link>	
					</div>
				</header>
			</div>
		)
	}
}