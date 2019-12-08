import React, { useState, useEffect, memo, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { get } from "../../../utils/http";
import api from "../../../utils/api";
import "./style.scss";
import Scroll from "../../../components/Scroll/Scroll";
import { Link } from "react-router-dom";

const detail = memo(function(props) {
  const [detail, setDetail] = useState("");
  const [reg, setReg] = useState([]);
  const [next, setNext] = useState("");
  const [bigUrl, setBigUrl] = useState("#");
  const [showImg, setShowImg] = useState(false);
  let thisId = 0;
  const doc = useRef();
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    // 监听大图
    doc.current.addEventListener("click", function(e) {
      if (e.target.nodeName === "IMG"&&e.target.index!=="xx") {
        setShowImg(true);
        setBigUrl(e.target.src);
      }
    });
    setDetail(location.state);
    // 请求数据
    getData();
    return () => {
      doc.current.removeEventListener("click", function(e) {
        if (e.target.nodeName === "IMG") {
          setShowImg(true);
          setBigUrl(e.target.src);
        }
      });
    };
  }, [params, location]);

  async function getData(nextUrl) {
    let thisReg = "";

    if (nextUrl === "next") {
      thisReg = await get(next);
      setReg([...reg, ...thisReg.itemList]);
      setNext(thisReg.nextPageUrl);
    } else {
      thisReg = await get(api.TOPIC_DETAIL.replace("{{id}}", params.id));
      // console.log(thisReg);
      setReg([...reg, ...thisReg.itemList]);
      setNext(thisReg.nextPageUrl);
    }
  }

  const topicDom = reg.map(item => (
    <div key={Math.random()}>
      {(() => {
        switch (item.type) {
          case "videoSmallCardCollection":
            item = item.data.itemList[0];
            console.log(item.data.id);
            thisId = item.data.id;
            return (
              <>
                <h2 className="title">相关推荐</h2>
                <div className="item border-bottom">
                  <Link
                    to={{
                      pathname: "/home/detail",
                      state: { id: thisId }
                    }}
                  >
                    <img
                      index="xx"
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
                      ? "0" + (item.data.duration % 60)
                      : item.data.duration % 60}
                  </span>
                  <div className="description">
                    <div className="headIcon">
                      <img
                        src={item.data.author.icon}
                        alt={item.data.author.id}
                      />
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
              </>
            );
          case "leftAlignTextHeader":
            return <h2 className="title">{item.data.text}</h2>;
          case "reply":
            // console.log(item.data.user.avatar);

            return (
              <div className="repItem">
                <img src={item.data.user.avatar} alt="" />
                <div className="center">
                  <h3>{item.data.user.nickname}</h3>
                  <p className="content">{item.data.message}</p>
                  {item.data.imageUrl && (
                    <img src={item.data.imageUrl} alt="图片" />
                  )}
                </div>
                <span>
                  <span>{item.data.likeCount}</span>
                  <em className="iconfont icon-xihuan"></em>
                </span>
              </div>
            );
          default:
            return;
        }
      })()}
    </div>
  ));

  return (
    <div className="ndetail" ref={doc}>
      <Scroll style={{ top: 0, bottom: 0 }}>
        <div className="back iconfont icon-fanhui" onClick={()=>{
          props.history.goBack();
        }}>
        </div>
        <div className="header">
          <img src={detail.headPicture} alt="" />
          <h1 className="topicName">{detail.title}</h1>
        </div>
        <div className="box">{topicDom}</div>
        <div
          className="loadMore"
          onClick={() => {
            getData("next");
          }}
        >
          点击加载更多...
        </div>
      </Scroll>
      {showImg && (
        <div
          className="imageMask"
          onClick={() => {
            setShowImg(false);
          }}
        >
          <img src={bigUrl} alt="大图" />
        </div>
      )}
    </div>
  );
});

export default detail;
