import React from "react";
import "./style.scss"
export default props => {
  return (
    <div className="header border-bottom">
      <span className={`back ${!props.hasBack ? "show" : ""}`} onClick={()=>{props.history.goBack()
      }}>back</span>
      <h3>{props.title}</h3>
    </div>
  );
};
