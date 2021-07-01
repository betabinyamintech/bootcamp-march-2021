import React, { useState } from "react";
import HashtagLabel from "../../Common/Hashtag/HashtagLabel";
import SearchForHashtag from "../SearchForHahstag";
import plusImg from "./PlusImg.svg";
//import "./HashtagList.css";
const HashtagList = ({ hashtags, selectedHashtags, setSelectedHashtags }) => {
  let theHashtags = hashtags.slice(0, 11);
  const [hashtagsPreview, setHashtagsPreview] = useState(theHashtags);
  if (selectedHashtags === undefined) selectedHashtags = [];
  let keys = 0;
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
        {/* <div
          className="hashtag newHashtag"
          onClick={() => {
            setAdd(!add);
          }}
        >
          <img className="hashtagIcon" src={plusImg} alt="" />
          אחר
        </div> */}
        {
          <SearchForHashtag
            hashtags={hashtags}
            setHashtagsPreview={(value) => {
              setHashtagsPreview([value, ...hashtagsPreview]);
            }}
          />
        }
        {hashtagsPreview.map((hashtag) => (
          <HashtagLabel
            key={keys++}
            onClick={
              typeof setSelectedHashtags === "function" &&
              (() => {
                console.log("starts setting on hashtag list");
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
