import React, { useRef, useState, useEffect, useMemo ,memo} from "react";
import Scroll from "../../components/Scroll/Scroll";
import Tabs from "../../components/Tabs/Tabs";
import { get } from "../../utils/http";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import "./style.scss";
// import Header from "../../components/Header/Header";
export default memo(props => {
  // 检索的结果
  const [search, setSearch] = useState([]);
  // 下一页链接
  const [nextPageUrl, setUrl] = useState("");
  // 获得category
  const [category, setCategory] = useState();
  const [loadTitle, setLoadTitle] = useState("- The End -");
  const key = useRef();
  // 获取数据
  async function getData(flag) {
    setLoadTitle("点击加载更多...");
    let url;
    if (flag === "next") {
      url = nextPageUrl;
    } else if (flag) {
      url = api.SEARCH.replace("{{key}}", flag);
    } else {
      url = api.SEARCH.replace("{{key}}", key.current.value);
    }
    //  console.log(url);
    let data = await get(url);
    // console.log(data);
    if (data.nextPageUrl) {
      setUrl(data.nextPageUrl.replace("http://baobab.kaiyanapp.com/", "/"));
    } else {
      setUrl("");
    }

    if (search.itemList && flag === "next") {
      setSearch({
        ...search,
        itemList: [...search.itemList, ...data.itemList]
      });
    } else {
      setSearch(data);
    }
    // console.log(search);
  }
  // 加载更多
  function loadMoreAction() {
    if (nextPageUrl) {
      getData("next");
    } else {
      setLoadTitle("- The End -");
    }
  }
  // 监听数据变化
  let itemDom = useMemo(() => {
    let itemDom =
      search.itemList &&
      search.itemList
        .filter(item => item.type === "video")
        .map(item => {
          console.log(item);
          return (
            <div className="item border-bottom" key={Math.random()}>
              <Link
                to={{
                  pathname: "/home/detail",
                  state: { id: item.data.id }
                }}
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
                  ? "0" + (item.data.duration % 60)
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
        });
    return itemDom;
  }, [search]);

  let categoryDom =
    category &&
    category.map(item => {
      return (
        <div
          className="categoryItem"
          key={item.defaultAuthorId}
          onClick={() => {
            getData(item.name);
          }}
        >
          <img src={item.bgPicture} alt={item.defaultAuthorId} />
          <span className="title">#{item.name}</span>
        </div>
      );
    });
  useEffect(() => {
    getCategory();
    async function getCategory() {
      let result = await get(api.SHOW_CATEGORY);
      // console.log(result);
      setCategory(result);
    }
  }, []);

  return (
    <div className="found page">
      <div className="top border-bottom">
        <input ref={key} onKeyDown={(ev)=>{

          if(ev.keyCode===13){
            key !== "" && getData();
          }
        }} placeholder="请输入关键词" type="text" autoFocus />
        <span
          onClick={() => {
            key !== "" && getData();
          }}
        ></span>
      </div>
      <Scroll className="scroll">
        <h1>热门分类</h1>
        <div className="hscroll">
          <div className="cateBox border-bottom">{categoryDom}</div>
        </div>
        <div className="result">{itemDom}</div>
        <div className="loadMore" onClick={loadMoreAction}>
          {loadTitle}
        </div>
      </Scroll>
      <Tabs />
    </div>
  );
});
