import React, { Component } from "react";
import Scroll from "../../components/Scroll/Scroll";
import Tabs from "../../components/Tabs/Tabs";
import Header from "../../components/Header/Header";
export default class notice extends Component {
  render() {
    return (
      <div className="notice page">
        <Header title="通知" />
        <Scroll className="scroll">
          <div className=""></div>
        </Scroll>
        <Tabs />
      </div>
    );
  }
}
