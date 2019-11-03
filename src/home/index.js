import React, { Component,useState,useEffect } from 'react'
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Link } from 'react-router-dom';
import './index.css';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			postList: [],
			tagType: '',
			page : ["?page=1","?page=2","?page=3","?page=4","?page=5"
			,"?page=6","?page=7","?page=8","?page=9","?page=10"],
			i:""||0
		}
	}
	
	componentWillMount() {
		let page = this.props.match.url;
		console.log(page);
		const type = this.props.match.params.type;
		this.setState({
			tagType: type || 'all',
		});
		this.aqa(type).then(res => {
			if (res.status === 200) {
				this.setState({
					postList: res.data.data,
				});
			}else{
				console.error(res.statusText);
			}
		}).catch(e => {
			console.warn(e);
		})
	}
	
	componentWillReceiveProps(nextProps) {
		const type = nextProps.match.params.type;
		this.setState({
			tagType: type || 'all',
		});
		if(this.state.tagType !== type){
			this.aqa(type).then(res =>{
				if (res.status === 200){
					this.setState({
						postList: res.data.data,
					});
				}else{
					console.error(res.statusText);
				}
			}).catch(e =>{
				console.warn(e);
			});
		}
	}
	
	aqa(type){
		console.log(this.state.i);
		return axios({
			methods: 'get',
			url: 'https://cnodejs.org/api/v1/topics/'+this.state.page[this.state.i],
			params:{
				tab:type
			}
		})
	}

	tabTypes(post) {
		const tab = post.tab;
		const map = {
			'top': '置顶',
			'share': '分享',
			'good': '精华',
			'ask': '问答',
			'job': '招聘'
		};
		if(post.top){
			return map['top'];
		}else if(post.good) {
			return map['good'];
		}else{
			return map[tab];
		}
	}
	
	Buton1 = ()=>{
		this.setState({
			i: 0
		})
	}
	Buton2 = ()=>{
		this.setState({
			i: 1
		})
	}
	Buton3 = ()=>{
		this.setState({
			i: 2
		})
	}
	Buton4 = ()=>{
		this.setState({
			i: 3
		})
	}
	Buton5 = ()=>{
		this.setState({
			i: 4
		})
	}
	Buton6 = ()=>{
		this.setState({
			i: 5
		})
	}
	Buton7 = ()=>{
		this.setState({
			i: 6
		})
	}
	Buton8 = ()=>{
		this.setState({
			i: 7
		})
	}
	Buton9 = ()=>{
		this.setState({
			i: 8
		})
	}
	Buton10 = ()=>{
		this.setState({
			i: 9
		})
	}

	render (){
		this.aqa()
		.then(res=>{
			console.log(res.config.url);
		})
		const contentHtml = () =>{
			return this.state.postList.map((post,index)=>(
				<div className="cell" key={post.id}>
					<a className="userleft">
						<img src={post.author.avatar_url} alt={post.author.loginname}/>
					</a>					
					<div className="imgright" >
						<span className="ans" title="回复数">
							{post.reply_count}
						</span>
						<span className="check">/</span>
						<span className="check" title="点击数">
							{post.visit_count}
						</span>
						<div className="usertop">
							<span className={(post.top || post.good) ? 'tag put-top': ' tag tab-common' }>
								{this.tabTypes(post)}
							</span>
							<Link className="usertoptitle" to={'/topic/'+post.id}>
								{post.title}
							</Link>
						</div>
					</div>
					
					<a className="userright">
						<img src={post.author.avatar_url}
						alt={post.author.loginname} />
						<span>
							{moment(post.last_reply_at).fromNow()}
						</span>
					</a>
				</div>
				)
			)}
			
			const infoHtml = () => (
				<div className="info-nodata">
					<h3>暂无数据</h3>
				</div>
			)

			return (
				<div className="leftt">
					<div className="all">
						<Link to='/'>全部</Link>
						<Link to='/tag/good'>精华</Link>
						<Link to='/tag/share'>分享</Link>
						<Link to='/tag/ask'>问答</Link>
						<Link to='/tag/job'>招聘</Link>
						<Link to='/tag/dev'>客户端测试</Link>
					</div>
					<div className="inner no-padding">
						<div className="topic-list">
							{this.state.postList.length ? contentHtml() : infoHtml()}
						</div>
						<div className="buton">
							<Link to='/' onClick={this.Buton1}>《</Link>
							<Link to='/' onClick={this.Buton1}>1</Link>
							<Link to='/' onClick={this.Buton2}>2</Link>
							<Link to='/' onClick={this.Buton3}>3</Link>
							<Link to='/' onClick={this.Buton4}>4</Link>
							<Link to='/' onClick={this.Buton5}>5</Link>
							<Link to='/' onClick={this.Buton6}>6</Link>
							<Link to='/' onClick={this.Buton7}>7</Link>
							<Link to='/' onClick={this.Buton8}>8</Link>
							<Link to='/' onClick={this.Buton9}>9</Link>
							<Link to='/' onClick={this.Buton10}>10</Link>
							<Link to='/' onClick={this.Buton10}>》</Link>
						</div>
					</div>
				</div>
				)
			}
		}

export default Home;