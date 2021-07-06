import React, { useEffect, useState } from "react";
import { getTags } from "../../../contexts/actions";
import HashtagLabel from "../../Common/Hashtag/HashtagLabel";
import SearchForHashtag from "../SearchForHahstag";
//import "./HashtagList.css";
const HashtagList = ({ hashtags, selectedHashtags, setSelectedHashtags }) => {
  let hahtagsLength = hashtags.length;
  let theHashtags = hashtags.slice(0, 11);
  const [hashtagsPreview, setHashtagsPreview] = useState(theHashtags);
  const [newHashtag, setNewHashtag] = useState(undefined);
  useEffect(() => {
    if (newHashtag !== undefined) {
      console.log("map start");
      newHashtag.map((hashtag) => {
        setSelectedHashtags(
          selectedHashtags.includes(hashtag)
            ? selectedHashtags.filter(
                (selectedHashtag) => selectedHashtag !== hashtag
              )
            : [...selectedHashtags, hashtag],
          hashtags
        );
      });
    }
  }, [newHashtag]);
  console.log("hashtag preview", hashtagsPreview.length);
  if (selectedHashtags === undefined) selectedHashtags = [];
  let keys = 0;
  console.log("selected hashtags", selectedHashtags);
  console.log("new hashtag", newHashtag);

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
        {
          <SearchForHashtag
            hashtags={hashtags}
            setHashtagsPreview={(value) => {
              setHashtagsPreview([value, ...hashtagsPreview]);
            }}
            setSelectedHashtags={
              typeof setSelectedHashtags === "function" &&
              ((hashtag) => {
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
            setNewHashtag={(value) => {
              newHashtag
                ? setNewHashtag([...newHashtag, value])
                : setNewHashtag([value]);
            }}
          />
        }
        {hashtagsPreview.map((hashtag) => (
          <HashtagLabel
            key={keys++}
            onClick={
              typeof setSelectedHashtags === "function" &&
              (() => {
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
