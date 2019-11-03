import React, { Component } from 'react';
import moment from 'moment';
import './index.css'

class Reply extends Component {
	render () {
		return (
			<div className={
				`reply ${this.props.highlight.includes(this.props.id) ? 'reply-highlight' : ''}`
			} id={this.props.id}>
				<div className="author-content">
					<a className="user-avatar">
						<img className="cute" src={this.props.author.avatar_url} 
						alt={this.props.author.loginname} />
					</a>
					<div className="user-info">
						<a className="reply-author">{this.props.author.loginname}</a>
						<a className="reply-time">
							{this.props.index}楼•{moment(this.props.create_at).fromNow()}
						</a>
						<span className={
							`reply-by-author ${this.props.loginname === this.props.author.loginname ?
							 'display' : ''}`}>
						</span>
					</div>
					<div className={`user-action ${this.props.ups.length ? 'display' : ''}`}>
						<span className="up-count">赞 <span>{this.props.ups.length}</span></span>
					</div>
				</div>
				<div className="reply-content" 
				dangerouslySetInnerHTML={{__html: this.props.content}}/>
				<hr/>
			</div>
		)}
}

export default Reply;