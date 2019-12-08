import React, { useEffect, memo, useState } from "react";
import Scroll from "../../components/Scroll/Scroll";
import Tabs from "../../components/Tabs/Tabs";
import Header from "../../components/Header/Header";
import { get } from "../../utils/http";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import "./style.scss";
export default memo(props => {
  const [allTopic, setAllTopic] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    if (allTopic.length > 0) {
      return;
    } else {
      getTopic();
    }
    let topicArr = [];
    async function getTopic() {
      for (let i = 180; i < 216; i++) {
        let topic = await get(api.TOPIC.replace("{{id}}", i));
        topicArr.unshift(topic);
      }
      // console.log(topicArr);
      setAllTopic(topicArr);
      setIsLoad(false);
    }
  }, []);

  // 渲染dom
  const topicDom =
    allTopic.length > 0 &&
    allTopic
      .filter(item => !item.errorCode)
      .map(item => {
        return (
          <div className="item border-bottom" key={item.id}>
            <Link to={{ pathname: "/notice/detail/"+item.id, state: { ...item } }}>
              <div className="imgBox">
                <img src="/favicon.ico" alt="开眼" />
              </div>
              <div className="center">
                <h2>{item.title}</h2>
                <p className="content">{item.content}</p>
              </div>
              <span className="iconfont icon-youfanhui"></span>
            </Link>
          </div>
        );
      });
  return (
    <>
      {isLoad && <Loading />}
      <div className="topic page">
        <Header title="话题" />
        <Scroll className="scroll">
          <div className="allTopic">{topicDom}</div>
        </Scroll>
        <Tabs />
      </div>
    </>
  );
});
