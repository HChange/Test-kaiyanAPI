import React, { Component } from "react";
import Scroll from "../../components/Scroll/Scroll";
import Tabs from "../../components/Tabs/Tabs";
import Header from "../../components/Header/Header";
export default class community extends Component {
  render() {
    return (
      <div className="community page">
        <Header title="社区" />
        <Scroll className="scroll">
          <div className=""></div>
        </Scroll>
        <Tabs />
      </div>
    );
  }
}
