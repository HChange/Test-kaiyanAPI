import React,{useEffect,useState,memo} from 'react';
import { get } from "../../../../utils/http";
import api from "../../../../utils/api";
import Scroll from "../../../../components/Scroll/Scroll"
import "./style.scss"


export default memo((props)=>{
    const [reply, setReply] = useState({})
    // const [canRender, setCanRender] = useState(1)
    useEffect(()=>{
        // console.log(props);
        fetchData();
        async function fetchData(){
            let rep = await get(api.HOT_REP.replace("{{id}}",props.match.params.id));
            // console.log(rep);
            setReply(rep);
        }
    },[props])

    function like(id){
        let newReply = {
          ...reply,
          replyList: reply.replyList.map(item => {
            if (item.id === id) {
              item.likeCount++;
            }
            return item;
          })
        };
        // console.log(newReply);
        setReply(newReply);
        // console.log(reply);
        // setCanRender(canRender+1)   
    }
    return (
    <>
    <div className="mask"></div>
      <div className="allReply">
        <Scroll  style={{ top: 0, bottom: 0 }}>
            <h1>所有评论</h1>
          {// eslint-disable-next-line array-callback-return
          reply.replyList &&
            reply.replyList.map(item => {
              return (
                <div className="item border-bottom" key={item.id}>
                  <a href="https://lkme.cc/3rC/MknNg3oyL">
                    <img src={item.user.avatar} alt={item.user.id} />
                  </a>
                  <div className="center">
                    <h2 className="name">
                      <span
                        className="text-overflow"
                        style={{ "maxWidth": "40%" }}
                      >
                        {item.user.nickname}
                      </span>
                      <div className="liked">
                        <span>{item.likeCount}</span>
                        <span onClick={()=>{
                            like(item.id)
                        }} className="iconfont icon-xihuan"></span>
                      </div>
                    </h2>
                    <p>{item.message}</p>
                  </div>
                </div>
              );
            })}
        </Scroll>
      </div>
      </>
    );
})