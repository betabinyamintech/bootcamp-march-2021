import React from "react";
import "./Hashtag.css";
import hashtagImg from "./Hashtag.svg";

const HashtagLabel = ({ selected, title, ...props }) => {
  return (
    <>
      <div {...props} className={"hashtag" + (selected ? " active" : "") + ""}>
        {selected && <img src={hashtagImg} alt="" />} {title}
      </div>
    </>
  );
};
export default HashtagLabel;
