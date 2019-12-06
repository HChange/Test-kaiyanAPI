const HOST = "http://localhost:3000";

// 首页数据
const REQUEST_DATA =HOST+"/api/v4/tabs/selected";
// 详情页
const VIDEO_DETAIL = HOST + "/api/v1/video/180189";
// 评论热门十条 无后面的所有评论
const HOT_REP = HOST + "/api/v1/replies/video?id=180189&num=10&type=video";
// 推荐
const RELATED = HOST + "/api/v4/video/related?id=14796&f=iphone&vc=4800";
export default {
  HOST,
  REQUEST_DATA,
  VIDEO_DETAIL,
  HOT_REP,
  RELATED
};