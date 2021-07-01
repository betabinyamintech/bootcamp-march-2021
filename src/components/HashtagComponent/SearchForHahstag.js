import "../HashtagComponent/SearchForHashtag.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { postTag, getTags, putInquiry, reload } from "../../contexts/actions";
import plusImg from "./HashtagScreen/PlusImg.svg";
import { useState } from "react";
import HashtagLabel from "../Common/Hashtag/HashtagLabel";

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
            &times;
          </button>
          <div className="header"> הוספת האשטאג לפניה </div>
          <span>חפש האשטג מתאים</span>
          <div className="content">
            <input
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            ></input>
            <div className="hashtagsFounded">
              {hashtags.map((hashtag) => {
                hashtags.includes(inputValue)
                  ? setIsInclude(true)
                  : setIsInclude(false);
                return (
                  hashtag.includes(inputValue) && (
                    <>
                      <HashtagLabel
                        title={hashtag}
                        onClick={() => {
                          setHashtagsPreview(hashtag);
                          setTimeout(() => {
                            close();
                          }, 700);
                        }}
                      />
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
