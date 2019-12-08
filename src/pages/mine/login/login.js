import React, { Component } from "react";
import "./style.scss";
export default class login extends Component {
  render() {
    return (
      <div className="login page">
        <div className="center">
          <h1>登录既注册</h1>
          <input type="text" placeholder="请输入手机号" />
          <input type="password" placeholder="请输入密码" />
          <div onClick={()=>{
              this.props.history.push("/")
          }}>登录</div>
        </div>
      </div>
    );
  }
}
