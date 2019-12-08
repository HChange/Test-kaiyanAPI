import React, { PureComponent } from "react";
// import Header from "../../../components/Header/Header";
import { get } from "../../../utils/http";
import api from "../../../utils/api";
import "./style.scss";
import { Link } from "react-router-dom";
import Scroll from "../../../components/Scroll/Scroll";
export default class detail extends PureComponent {
  constructor(props) {

    super(props);
    this.state = {
      data: {},
      rep: {},
      related: {},
      id:""
    };
  }

  render() {
    let data = this.state.data;
    let rep = this.state.rep;
    let related = this.state.related;
    return (
      <div className="detail page">
        {data.consumption && (
          <Scroll style={{ top: 0, bottom: 0 }}>
            <span
              className="back iconfont icon-fanhui"
              onClick={() => this.props.history.go(-1)}
            ></span>
            {/* <Header title="详情" className="" hasBack={true} {...this.props} /> */}
            <video controls src={this.state.data.playUrl}></video>
            <div className="description border-bottom">
              <h1>{data.title}</h1>
              <p className="category">
                <span>{data.category}</span>&nbsp;/&nbsp;
                <span>{data.author && data.author.name}</span>
              </p>
              <p className="desc">{data.description}</p>

              <div className="operator">
                <span className="like iconfont icon-xihuan">
                  <em>{data.consumption.collectionCount}</em>
                </span>
                <span className="share iconfont icon-fenxiang">
                  <em>{data.consumption.realCollectionCount}</em>
                </span>

                {this.props.location.state && (
                  <Link
                    to={{
                      pathname:
                        "/home/detail/reply/" + this.props.location.state.id,
                      state: { id: this.props.location.state.id }
                    }}
                  >
                    <span className=" discuss iconfont icon-xiaoxi">
                      <em>{data.consumption.replyCount}</em>
                    </span>
                  </Link>
                )}
                <span className="download iconfont icon-xiazai">
                  <em>{data.consumption.shareCount}</em>
                </span>
              </div>
            </div>
            {rep.replyList.length > 0 && (
              <Link
                to={{
                  pathname:
                    "/home/detail/reply/" + this.props.location.state.id,
                  state: { id: this.props.location.state.id }
                }}
              >
                <div className="hot border-bottom">
                  <span className="left">H</span>
                  <div className="center more-overflow">
                    <span className="name">
                      热评 · {rep.replyList[0].user.nickname}：
                    </span>
                    {rep.replyList[0].message}
                  </div>
                  <span className="right iconfont icon-youfanhui-copy"></span>
                </div>
              </Link>
            )}
            <div className="author border-bottom">
              <img src={data.author.icon} alt={data.author.id} />
              <div className="center">
                <h3>{data.author.name}</h3>
                <p className="text-overflow">{data.author.description}</p>
              </div>
              <div className="follow" id={data.author.id}>
                +关注
              </div>
            </div>
            <div className="related">
              <h2>相关推荐</h2>
              {related.itemList &&
                // eslint-disable-next-line array-callback-return
                related.itemList.map(item => {
                  if (item.type !== "textCard") {
                    return (
                      <Link
                        className="card"
                        onClick={() => {
                          console.log(item.data.id);

                          this.setState({
                            ...this.state,
                            id: item.data.id
                          });
                        }}
                        to={{
                          pathname: "/home/station",
                          state: { id: item.data.id }
                        }}
                        key={item.data.id}
                      >
                        <img
                          src={item.data.cover.detail.replace(
                            "quality/60",
                            "quality/100"
                          )}
                          alt={item.data.id}
                        />
                        <span className="duration">
                          {parseInt(item.data.duration / 60) < 10
                            ? "0" + parseInt(item.data.duration / 60)
                            : parseInt(item.data.duration / 60)}
                          :
                          {item.data.duration % 60 < 10
                            ? "0" + (item.data.duration % 60)
                            : item.data.duration % 60}
                        </span>
                        <div className="right">
                          <p className="title">{item.data.title}</p>
                          <p className="bottom">
                            <span className="category">
                              #{item.data.category}
                            </span>
                            <span className="iconfont icon-fenxiang"></span>
                          </p>
                        </div>
                      </Link>
                    );
                  }
                })}
            </div>
          </Scroll>
        )}
      </div>
    );
  }
  async componentDidMount() {
    this.setState({
      ...this.state,
      id: this.props.location.state
        ? this.props.location.state.id
        : this.props.match.params.id
    });
    let data = await get(api.VIDEO_DETAIL + this.props.location.state.id);
    // console.log(data);
    let rep = await get(
      api.HOT_REP.replace("{{id}}", this.props.location.state.id)
    );
    let related = await get(
      api.RELATED.replace("{{id}}", this.props.location.state.id)
    );
    console.log(related);

    this.setState({
      ...this.state,
      data,
      rep,
      related
    });
  }
}
