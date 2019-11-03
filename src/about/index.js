import { Link } from 'react-router-dom';
import stringHtml from './markdown.js';
import './index.css'
import React, { Component } from 'react'

export default class About extends Component {
	render() {

	return (
		<div className="panel">
			<div className="all">
				<Link to="/">主页</Link>
				<span className="xie">/</span>
				<span className="xin">关于</span>
			</div>
			<div className="inner topic">
				<div className="topic-content" dangerouslySetInnerHTML={{__html: stringHtml}}></div>
			</div>
		</div>)
}
}