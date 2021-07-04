import "../HashtagComponent/SearchForHashtag.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { postTag, getTags, putInquiry, reload } from "../../contexts/actions";
import plusImg from "./HashtagScreen/PlusImg.svg";
import { useState } from "react";
import HashtagLabel from "../Common/Hashtag/HashtagLabel";
import InputQuestion from "../Common/InputQuestion/InputQuestion";
import xIcon from "../commonsSVG/x-icon.svg";
const SearchForHashtag = ({ hashtags, setHashtagsPreview }) => {
  //CALLED BY - HASHTAGS LIST
  const [inputValue, setInputValue] = useState();
  const [isInclude, setIsInclude] = useState();
  const [allHashtags, setAllHahstags] = useState(hashtags);

  const postNewTag = async () => {
    await postTag({ name: inputValue, createdAt: new Date() });
    setHashtagsPreview(inputValue);
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
                        className="hashtagResult"
                        onClick={() => {
                          setHashtagsPreview(hashtag);
                          setInputValue("");
                          setTimeout(() => {
                            close();
                          }, 700);
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
                  {" "}
                  כנראה שעוד לא נוסף אצלנו השטאג כזה
                  <span></span>
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
