import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
let tabList = [
  { id: 1, title: "首页", icon: "iconfont", to: "/home" },
  { id: 2, title: "社区", icon: "iconfont", to: "/community" },
  { id: 3, title: "", icon: "iconfont", to: "/upload" },
  { id: 4, title: "通知", icon: "iconfont", to: "/notice" },
  { id: 5, title: "我的", icon: "iconfont", to: "/mine" }
];
export default class Tabs extends Component {
  render() {
    return (
      <div id="tabs" className="border-top">
        {tabList.map(item => {
          return (
            <NavLink key={item.id} to={item.to}>
              <em className={item.icon}>x</em>
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </div>
    );
  }
}
