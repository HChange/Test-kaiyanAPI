import React, { Component } from "react";
import Scroll from "../../components/Scroll/Scroll";
import Tabs from "../../components/Tabs/Tabs";
import Header from "../../components/Header/Header";
// import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { requestData } from "./reducer";
import "./style.scss";
class home extends Component {
  constructor(props){
    super(props);
    this.state = ""
  }
  render() {

    let showList = this.props.data.itemList?this.props.data.itemList.map(item => {
      return (
        <div className="item border-bottom" key={item.data.id}>
          <a>
            <img src={item.data.cover.detail.replace("quality/60",'quality/1000')} alt={item.data.id} />
          </a>
          <div className="description">
            <div className="headIcon">
              <img src={item.data.author.icon} alt={item.data.author.id} />
            </div>
            <div className="center text-overflow">
              <h2 className="text-overflow">{item.data.title}</h2>
              <p>
                <span className="text-overflow">{item.data.author.name}</span>
                &nbsp;/&nbsp;
                <span>#{item.data.category}</span>
              </p>
            </div>
            <em className="iconfont icon-fenxiang"></em>
          </div>
        </div>
      );
    }):"";
    return (
      <div className="page home">
        <Header title="首页" />
        <div className="pullRefetch">
           <p><em>↓</em>&nbsp;下拉可以刷新</p>
           {/* 释放立即刷新...↓ */}
           {/* 正在刷新 */}
        </div>
        <Scroll className="scroll">
          <div className="content" onClick={() => console.log(this.props.data)}>
            <div className="title">
              <h2>每日开眼精选</h2>
              <a>
                查看往期<span className="iconfont icon-youfanhui-copy"></span>
              </a>
            </div>
            {showList}
            {/* <Link to={{pathname:"/home/detail",state:{id:10000}}} >详情</Link> */}
          </div>
        </Scroll>
        <Tabs />
      </div>
    );
  }
  componentDidMount() {
    this.props.getData();
  }
}
const mapStateToProps = state => {
  return {
    data: state.home.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData() {
      let action = requestData();
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
