import React, { Component } from "react";
import Scroll from "../../components/Scroll/Scroll";
import Tabs from "../../components/Tabs/Tabs";
import Header from "../../components/Header/Header";
import {Link} from "react-router-dom"
export default class mine extends Component {
  render() {
    return (
      <div className="mine page">
        <Header title="我的" />
        <Scroll className="scroll">
          <div className="">
            <Link to="/login">登录</Link>
            <Link to="/register">注册</Link>
          </div>
        </Scroll>
        <Tabs />
      </div>
    );
  }
}
