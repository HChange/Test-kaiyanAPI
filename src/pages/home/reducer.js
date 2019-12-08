
import api from "../../utils/api";
import {get} from "../../utils/http";

const initialState = {
    itemList:[],
    nextPageUrl:""
};

const rudcer = (state = initialState, action) => {
  // console.log(state);
  
  switch (action.type) {
    case "setData":
        console.log(action.data.nextPageUrl);
        
      return {
        ...state,
        itemList: [
          ...state.itemList,
          ...action.data.itemList.filter(item => item.type === "video")
        ],
        nextPageUrl:
          action.data.nextPageUrl === null
            ? "/api/v4/tabs/selected?date=" + action.data.nextPublishTime
            : action.data.nextPageUrl.replace("http://baobab.kaiyanapp.com/","/")
      };
    default:
      return state;
  }
};

export const requestData = (url)=>  async dispatch => {
  console.log(url);
  let data = ""
  if(!url){
    data = await get(api.REQUEST_DATA);
  }else{
    data = await get(url);
  }
  let action = setData(data);
  dispatch(action);
};

export const setData = (val)=>({
  type: 'setData',
  data: val
})

export default rudcer;
