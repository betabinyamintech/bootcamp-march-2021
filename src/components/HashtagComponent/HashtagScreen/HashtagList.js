import React from "react";
import Hashtag from "../../Common/Hashtag/Hashtag";
import plusImg from "./PlusImg.svg";

import "./HashtagList.css";

const HashtagList = ({ hashtags, selectedHashtags, setSelectedHashtags }) => {
  const hashtagsWithState = hashtags.map((hashtag) => {
    hashtag.active = selectedHashtags.find((x) => x.title === hashtag.title);
    return hashtag;
  });
  return (
    <div className="hashtags">
      <div className="newHashtag">
        <img src={plusImg} alt="" />
        אחר
      </div>

      {hashtagsWithState.map(({ title, active }) => (
        <Hashtag
          onClick={() => {
            // newHashtag()=>{}
            setSelectedHashtags(
              active
                ? selectedHashtags.filter((hashtag) => title !== hashtag.title)
                : [...selectedHashtags, { title }]
            );
          }}
          title={title}
          active={active}
        />
      ))}
    </div>
  );
};
export default HashtagList;
