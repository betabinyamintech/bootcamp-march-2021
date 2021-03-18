import React from "react";
import "./Hashtag.css";
import hashtagImg from "./Hashtag.svg";

const Hashtag = ({ active, title, ...props }) => {
  return (
    <div>
      <div {...props} className={"hashtag" + (active ? " active" : "") + ""}>
        {active && <img src={hashtagImg} alt="" />} {title}
      </div>
    </div>
  );
};
export default Hashtag;
