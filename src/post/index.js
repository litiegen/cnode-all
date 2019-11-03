import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Reply from './reply';
import './index.css'

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postId: '',
			postInfo: {},
			highlight: []
		}
	}
	componentWillMount() {
		const postId = this.props.match.params.postId;
		this.setState({ postId });
		this.getPostInfo().then(res =>{
			if (res.status === 200) {
				const postInfo = res.data.data;
				this.setState({ postInfo });
				this.postSort();
			}else {
				console.error(res.statusText);
			}
		}).catch(e => {
			console.error(e);
		})
	}
	
	postSort() {
		const postCopy = this.state.postInfo.replies.slice();
		postCopy.sort((a,b) => {
			return b.ups.length - a.ups.length;
		});
		let highlight = [];
		if (postCopy.length > 3) {
			for (let i = 0; i < 3; i++) {
				highlight.push(postCopy[i].id);
			}
		}
		this.setState({
			highlight
		})
	}
	
	getPostInfo() {
		return axios.get(`https://cnodejs.org/api/v1/topic/${this.props.match.params.postId}`)
	}
	
	getPostType() {
		const postInfo = this.state.postInfo;
		const tab = postInfo.tab;
		const map = {
			'share': '分享',
			'good': '精华',
			'ask': '问答',
			'job': '招聘',
			'dev': '客户端测试',
		}
		return map[tab];
	}
	
	
	render() {
		const postInfo = this.state.postInfo;
		const author = postInfo&&postInfo.author&&postInfo.author.loginname;
		const tabType = this.getPostType();
		return (
			<div>
				<div className="panel" >
					<div className="thetop">
						<span className="title">
							<span>置顶</span>
							<p>{this.state.postInfo.title}</p>
						</span>
						<div className="topic-title-info">
							<li><span className="fabu">发布于 {moment(postInfo.create_at).fromNow()}</span></li>
							<li><span className="fabu">作者 {author}</span></li>
							<li><span className="fabu">{postInfo.visit_count} 次浏览</span></li>
							{/* <span>最后一次编辑是{moment(postInfo.create_at).fromNow()}</span> */}
							<li><span className="fabu">来自 {tabType}</span></li>
						</div>
					</div>
					<hr></hr>
					<div className="topic-content" 
					dangerouslySetInnerHTML={{__html: this.state.postInfo.content}}/>
				</div>
				
				<div className="panel">
					<div className="headerq">
						<span className="col-code">{postInfo && postInfo.reply_count} 回复</span>
					</div>
					<div className="reply-wrapper">
						{
							postInfo && postInfo.replies && postInfo.replies.map((el,index) => {
								return (
									<Reply {...el}
									highlight={this.state.highlight}
									key={el.id}
									loginname={postInfo && postInfo.author.loginname}
									index={index+1}/>
									)
								})
						}
					</div>
				</div>
			</div>
		)}
}

export default Post;