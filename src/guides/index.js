import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import stringHtml from './markdown';
import './index.css';

class Guides extends Component {
	render() {
		return (
			<div className="panel">
				<div className="all">
					<Link to="/">主页</Link>
					<span className="xie">/</span>
					<span className="xin">Node.js 新手入门</span>
				</div>
				<div>
					<div dangerouslySetInnerHTML={{__html: stringHtml}}>
				</div>
			</div>
		</div>)
		}
	}

export default Guides;
