const HOST = "http://localhost:3000";

// 首页数据
const REQUEST_DATA =HOST+"/api/v4/tabs/selected";
// 详情页
const VIDEO_DETAIL = HOST + "/api/v1/video/";
// 评论热门十条 无后面的所有评论
const HOT_REP = HOST + '/api/v1/replies/video?id={{id}}&num=100&type=video';
// 推荐
const RELATED = HOST + "/api/v4/video/related?id={{id}}&f=iphone&vc=4800";
// 关注
const FOLLOW = HOST + "/api/v4/tabs/follow";
// 搜索
const SEARCH = HOST + "/api/v1/search?query={{key}}";
// 总类
const CATEGORY = HOST + "/api/v4/discovery/category";
// 展示的种类
const SHOW_CATEGORY = HOST + "/api/v2/categories";
// 话题详情
const TOPIC_DETAIL = HOST+"/api/v2/replies/video?type=topic&videoId={{id}}"
// 话题
const TOPIC = HOST + "/api/v7/topic/detail?id={{id}}";
// 作者
const AUTHOR =
  HOST +
  "/api/v3/pgc/videos?pgcId={{id}}&strategy=date&udid=0ac0ebf78bde4d4996c9365e3f63acc56ccc1c63";
export default {
  HOST,
  REQUEST_DATA,
  VIDEO_DETAIL,
  HOT_REP,
  RELATED,
  FOLLOW,
  SEARCH,
  CATEGORY,
  SHOW_CATEGORY,
  TOPIC_DETAIL,
  TOPIC,
  AUTHOR
};