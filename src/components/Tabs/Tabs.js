import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
let tabList = [
  { id: 1, title: "首页", icon: "iconfont icon-sanjiaoxing", to: "/home" },
  {
    id: 2,
    title: "发现",
    icon: "iconfont icon-zhengfangxing",
    to: "/found"
  },
  { id: 3, title: "", icon: "iconfont icon-shangchuan", to: "/upload" },
  { id: 4, title: "通知", icon: "iconfont icon-yuan", to: "/notice" },
  { id: 5, title: "我的", icon: "iconfont icon-cha", to: "/mine" }
];
export default class Tabs extends Component {
  render() {
    return (
      <div id="tabs" className="border-top">
        {tabList.map(item => {

          if(item.id===3){
            return (
              <NavLink key={item.id} to={item.to}>
                <em className={item.icon}></em>
              </NavLink>
            );
          }
          return (
            <NavLink key={item.id} to={item.to}>
              <em className={item.icon}></em>
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </div>
    );
  }
}
