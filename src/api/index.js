import React from 'react';
import { Link } from 'react-router-dom';
import stringHtml from './markdown';
import './index.css'

const API = () => {
	return (
		<div className="panel">
			<div className="all">
				<Link to="/">主页</Link>
				<span className="xie">/</span>
				<span className="xin">API</span>
			</div>
			<div className="inner topic">
				<div className="topic-content">
					<div className="markdown-text" dangerouslySetInnerHTML={{__html: stringHtml}}>

					</div>
				</div>
			</div>
		</div>
	)
}

export default API;