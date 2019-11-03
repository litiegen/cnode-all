import React from 'react';
import './index.css';

const Sidebar = () => (
<div className="rightall">
	{/* 右第一块 */}
	<div className="chinese">
		<p>CNode: Node.js专业中文社区</p>
		<div className="git">
			您可以<a href="/"> 登录 </a>或<a href="/"> 注册 </a>,也可以
		</div>
		<a href="https://github.com">
			<span className="span-info">通过 G i t H u b 登录</span>
		</a>
	</div>
	{/* 右边图片 */}
	<div className="img">
		<img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
		<img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
		<img src="https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
	</div>
	{/* 右边回复话题 */}
	<div className="chat">
		<div className="chattop">
			<span>无人回复的话题</span>
		</div>
		<div>none</div>
	</div>
	{/* 积分榜 */}
	<div className="chat">
		<div className="chattop">
			<span>积分榜 Top 100 >></span>
		</div>
		<div>none</div>
	</div>
	{/* 友情社区 */}
	<div className="chat">
		<div className="chattop">
			<span>友情社区</span>
		</div>
		<div className="img2">
			<img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png"/>
			<img src="https://static2.cnodejs.org/public/images/golangtc-logo.png"/>
			<img src="https://static2.cnodejs.org/public/images/phphub-logo.png"/>
			<img src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"/>
		</div>
	</div>
	{/* 客户端二维码 */}
	<div className="er">
		<div className="erma">
			<span>客户端二维码</span>
		</div>
		<img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
	</div>
	
</div>)

export default Sidebar;
