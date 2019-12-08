import React from "react";
import "./style.scss"
export default props => {
  return (
    <div className="header border-bottom">
      <span
        className={`back iconfont icon-fanhui ${
          props.hasBack&& "show"
        }`}
        onClick={() => {
          props.history.goBack();
        }}
      ></span>
      <h3>{props.title}</h3>
    </div>
  );
};
