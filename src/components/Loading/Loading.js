import React from "react";
import "./style.scss";
const load = (props) => {
  return (
    <div className={`loading ${props.noTop?"noTop":"" + props.noBottom?"props.noBottom":""}`}>
      <img
        src="http://img.zcool.cn/community/012b3c599276cc0000002129ebff53.gif"
        alt="loading"
      />
    </div>
  );
};

export default load;
