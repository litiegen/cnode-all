import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Login extends Component {
    
    github(){
        window.location.href = 'https://github.com'
    }

    render() {
        return (
            <div className="panel">
                <div className="all">
                    <Link to="/">主页</Link>
                    <span className="xie">/</span>
                    <span className="xin">登录</span>
                </div>
                <div className="login">
                    <span className="yong">用户名</span><input className="yongin" type="text"/>
                    <span className="mi">密码</span><input className="miin" type="password"/>
                    <Link className="deng" to="/">登 录</Link>
                    <button className="gitt" onClick={this.github}>通过 GitHub 登录</button>
                    <Link className="forget" to="/forget">忘记密码了?</Link>
                </div>
            </div>
        )
    }
}
export default Login;
