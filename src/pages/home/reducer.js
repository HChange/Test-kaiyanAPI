
import api from "../../utils/api";
import {get} from "../../utils/http";

const initialState = {
  data:""
};

const rudcer = (state = initialState, action) => {
  console.log(action);
  
  switch (action.type) {
    case "setData":
      console.log(action);
      let data = {
        itemList: action.data.itemList.filter(item=>item.type==="video"),
        nextPageUrl: action.data.nextPageUrl
      };
      return {
        ...state,
        data
      }
    default:
      return state;

  }
};

export const requestData = ()=>  async dispatch => {
  let data = await get(api.REQUEST_DATA);
  let action = setData(data);
  dispatch(action);
};


export const setData = (val)=>({
  type: 'setData',
  data: val
})

export default rudcer;
