import React from "react";
import "./Hashtag.css";
import hashtagImg from "./Hashtag.svg";

const HashtagLabel = ({ selected, title, ...props }) => {
  return (
    <div>
      <div {...props} className={"hashtag" + (selected ? " active" : "") + ""}>
        {selected && <img src={hashtagImg} alt="" />} {title}
      </div>
    </div>
  );
};
export default HashtagLabel;
