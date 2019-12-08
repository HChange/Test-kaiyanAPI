import React, { Component } from "react";
import Scroll from "../../components/Scroll/Scroll";
import Tabs from "../../components/Tabs/Tabs";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./style.scss"
export default class mine extends Component {
  constructor(props) {
    super(props);
    this.state={
      isLogin: false
    };
  }
  render() {
    return (
      <div className="mine page">
        <Header title="我的" />
        <Scroll className="scroll">
          <div className="mineL">
            {this.state.isLogin ? (
              <div>登录成功！</div>
            ) : (
              <>
                <Link to="/login">登录既注册</Link>
                {/* <Link to="/register">注册</Link> */}
              </>
            )}
          </div>
        </Scroll>
        <Tabs />
      </div>
    );
  }
}
