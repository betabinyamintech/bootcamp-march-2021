import "./SearchForHashtag.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { postTag, getTags, putInquiry, reload } from "../../contexts/actions";
import plusImg from "./HashtagScreen/PlusImg.svg";
import { useState } from "react";
import HashtagLabel from "../Common/Hashtag/HashtagLabel";
import InputQuestion from "../Common/InputQuestion/InputQuestion";
import xIcon from "../commonsSVG/x-icon.svg";
import { useUserState } from "../../contexts/context";
const SearchForHashtag = ({
  hashtags,
  setHashtagsPreview,
  setSelectedHashtags,
  setNewHashtag,
}) => {
  //CALLED BY - HASHTAGS LIST
  let user = useUserState().user;
  const { _id } = user;
  const [inputValue, setInputValue] = useState();
  const [isInclude, setIsInclude] = useState();
  const [allHashtags, setAllHahstags] = useState(hashtags);

  const postNewTag = async () => {
    await postTag({ name: inputValue, createdAt: new Date() });
    setHashtagsPreview(inputValue);
    setNewHashtag(inputValue);
  };
  return (
    <Popup
      trigger={
        <div className="hashtag newHashtag">
          <img className="hashtagIcon" src={plusImg} alt="" />
          אחר
        </div>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <div className="inquiryDetails"></div>{" "}
          <button className="close" onClick={close}>
            <img src={xIcon}></img>{" "}
          </button>
          <div className="header"> הוספת #האשטאג </div>
          <span>חפש האשטג מתאים</span>
          <div className="content">
            <InputQuestion
              height="26px"
              width="90%"
              isInput={true}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <div className="hashtagsFounded">
              {hashtags.map((hashtag) => {
                hashtags.includes(inputValue)
                  ? setIsInclude(true)
                  : setIsInclude(false);
                return (
                  hashtag.includes(inputValue) && (
                    <>
                      <div
                        className="hashtagFound"
                        onClick={() => {
                          setHashtagsPreview(hashtag);
                          setSelectedHashtags(hashtag);
                          setInputValue("");
                          setTimeout(() => {
                            close();
                          }, 700);
                          // setTimeout(() => {}, 1100);
                        }}
                      >
                        {hashtag}
                      </div>
                    </>
                  )
                );
              })}
              {inputValue && !isInclude && (
                <>
                  לא מוצא האשטאג מתאים? <span></span>
                  <div
                    className="hashtag newHashtag"
                    onClick={() => {
                      postNewTag();
                      setTimeout(() => {
                        close();
                      }, 700);
                    }}
                  >
                    <img className="hashtagIcon" src={plusImg} alt="" />
                    {` ליצירת האשטאג חדש : ${inputValue}`}{" "}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="actions">
            {/* <button
                className="button"
              
              >
                סגירה
              </button> */}
          </div>
        </div>
      )}
    </Popup>
  );
};
export default SearchForHashtag;
