import React, { Component } from "react";
import BScroll from "better-scroll";
import "./style.scss";
export default class Scroll extends Component {
  render() {
    return (
      <div className="scroll" ref="scroll">
        <div className="scrollContent">{this.props.children}</div>
      </div>
    );
  }
  componentDidMount() {
    let scroll = new BScroll(this.refs.scroll, {
      tap: true,
      click: true,
      probeType: 3,
      //下拉
      pullDownRefresh: {
        threshold: 44.44,
        // stop: 44.44
      },
      //上拉
      pullUpLoad: {
        threshold: 44.44,
        // pullDownRefresh: true, // 默认stop: 40
        stop: 40
      },

    });
    //下拉
    scroll.on("pullingDown", () => {
      // this.getData();
       setTimeout(() => {
         console.log(111);
          scroll.finishPullDown();
          scroll.refresh();
         
       }, 1000);
    });
    //上拉
    scroll.on("pullingUp", () => {
      // this.getData();
      
      setTimeout(() => {
        console.log(111);
       scroll.finishPullUp();
        // scroll.refresh();
      }, 10000);
     
    });

    

    //下拉
   
  }
}
