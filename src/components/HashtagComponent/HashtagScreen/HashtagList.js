import React, { useEffect, useState } from "react";
import { getTags } from "../../../contexts/actions";
import { useUserState } from "../../../contexts/context";
import HashtagLabel from "../../Common/Hashtag/HashtagLabel";
import SearchForHashtag from "../SearchForHahstag";
const HashtagList = ({ hashtags, selectedHashtags, setSelectedHashtags }) => {
  console.log("selected", selectedHashtags);
  console.log("hashtags all", hashtags);
  if (selectedHashtags === undefined) {
    selectedHashtags = [];
  }
  let rest = 11 - selectedHashtags.length;
  let cutHashtags = hashtags.slice(0, rest);
  let theHashtags = selectedHashtags.concat(cutHashtags);
  const [hashtagsPreview, setHashtagsPreview] = useState(theHashtags);
  const [newHashtag, setNewHashtag] = useState(undefined);
  useEffect(() => {
    if (newHashtag !== undefined) {
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
