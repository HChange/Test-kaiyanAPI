import React, { PureComponent } from "react";
import Scroll from "../../components/Scroll/Scroll";
import Tabs from "../../components/Tabs/Tabs";
import Header from "../../components/Header/Header";
import{ Link} from "react-router-dom"
// import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { requestData } from "./reducer";
import "./style.scss";
class home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = "";
    console.log(props);
  }
  render() {
    let showList = this.props.itemList
      ? this.props.itemList.map(item => {
          return (
            <div className="item border-bottom" key={Math.random()}>
              <Link
                to={{ pathname: "/home/detail", state: { id: item.data.id } }}
              >
                <img
                  src={item.data.cover.detail.replace(
                    "quality/60",
                    "quality/1000"
                  )}
                  alt={item.data.id}
                />
              </Link>
              <span className="duration">
                {parseInt(item.data.duration / 60) < 10
                  ? "0" + parseInt(item.data.duration / 60)
                  : parseInt(item.data.duration / 60)}
                :
                {item.data.duration % 60 < 10
                  ? "0"+item.data.duration % 60
                  : item.data.duration % 60}
              </span>
              <div className="description">
                <div className="headIcon">
                  <img src={item.data.author.icon} alt={item.data.author.id} />
                </div>
                <div className="center text-overflow">
                  <h2 className="text-overflow">{item.data.title}</h2>
                  <p>
                    <span className="text-overflow">
                      {item.data.author.name}
                    </span>
                    &nbsp;/&nbsp;
                    <span>#{item.data.category}</span>
                  </p>
                </div>
                <em className="iconfont icon-fenxiang"></em>
              </div>
            </div>
          );
        })
      : "";
    return (
      <div className="page home">
        <Header title="首页" hasBack={false}/>
        <div className="pullRefetch">
          <p>{/* <em>↓</em>&nbsp;下拉可以刷新 */}</p>
          {/* 释放立即刷新...↓ */}
          {/* 正在刷新 */}
        </div>
        <Scroll
          className="scroll"
          onRefresh={() => {
            this.props.getData();
          }}
          onLoadMore
        >
          <div className="content">
            <div className="title">
              <h2>每日开眼精选</h2>
              <a href="#background">
                查看往期<span className="iconfont icon-youfanhui-copy"></span>
              </a>
            </div>
            {showList}
            <div
              className="loadMore"
              onClick={this.loadMoreAction.bind(this, this.props.nextPageUrl)}
            >加载更多...</div>
            {/* <Link to={{pathname:"/home/detail",state:{id:10000}}} >详情</Link> */}
          </div>
        </Scroll>
        <Tabs />
      </div>
    );
  }
  componentDidMount() {
    if (this.props.itemList.length<=0) {
      this.props.getData();
    }
  }
  loadMoreAction(url){
    this.props.getData(url);
    console.log(url);
    
  }

}
const mapStateToProps = state => {
  return {
    itemList: state.home.itemList,
    nextPageUrl: state.home.nextPageUrl
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData(url) {
      let action = requestData(url);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
