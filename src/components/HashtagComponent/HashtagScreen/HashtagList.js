import React from "react";
import HashtagLabel from "../../Common/Hashtag/HashtagLabel";
import plusImg from "./PlusImg.svg";

//import "./HashtagList.css";

const HashtagList = ({ hashtags, selectedHashtags, setSelectedHashtags }) => {
  if (selectedHashtags === undefined) selectedHashtags = [];

  return (
    <div
      style={{
        display: "flex",
        width: " 400p",
        height: "200px",
        alignitems: "center",
      }}
    >
      <div className="hashtags">
        <div className="newHashtag">
          <img src={plusImg} alt="" />
          אחר
        </div>

        {hashtags.map((hashtag) => (
          <HashtagLabel
            onClick={
              typeof setSelectedHashtags === "function" &&
              (() => {
                // newHashtag()=>{}
                setSelectedHashtags(
                  selectedHashtags.includes(hashtag)
                    ? selectedHashtags.filter(
                        (selectedHashtag) => selectedHashtag !== hashtag
                      )
                    : [...selectedHashtags, hashtag],
                  hashtags
                );
              })
            }
            title={hashtag}
            selected={selectedHashtags.includes(hashtag)}
          />
        ))}
      </div>
    </div>
  );
};
export default HashtagList;
