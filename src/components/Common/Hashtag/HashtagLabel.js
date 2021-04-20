import React from "react";
import "./Hashtag.css";
import hashtagImg from "./Hashtag.svg";

const HashtagLabel = ({ active, title, ...props }) => {
  return (
    <div>
      <div {...props} className={"hashtag" + (active ? " active" : "") + ""}>
        {active && <img src={hashtagImg} alt="" />} {title}
      </div>
    </div>
  );
};
export default HashtagLabel;
