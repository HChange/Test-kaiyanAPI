import React, { Component } from "react";
import Header from "../../../components/Header/Header";

export default class detail extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="detail page">
        <Header title="详情" {...this.props} />
      </div>
    );
  }
}
