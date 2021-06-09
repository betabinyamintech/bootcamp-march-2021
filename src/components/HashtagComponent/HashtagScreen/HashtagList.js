import React from "react";
import HashtagLabel from "../../Common/Hashtag/HashtagLabel";
import plusImg from "./PlusImg.svg";

//import "./HashtagList.css";

const HashtagList = ({ hashtags, selectedHashtags, setSelectedHashtags }) => {
  if (selectedHashtags === undefined) selectedHashtags = [];
  let keys = 0;
  console.log("selectedHashtags", selectedHashtags);
  console.log("Hashtags", hashtags);
  return (
    <div
      style={{
        display: "flex",
        width: " 400p",
        height: "auto",
        alignitems: "center",
      }}
    >
      <div className="hashtagList">
        <div className="hashtag newHashtag">
          <img className="hashtagIcon" src={plusImg} alt="" />
          אחר
        </div>

        {hashtags.map((hashtag) => (
          <HashtagLabel
            key={keys++}
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
