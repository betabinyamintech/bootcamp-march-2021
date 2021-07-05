import "./ComleteMissingDetails.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";
import HashtagLabel from "../Common/Hashtag/HashtagLabel";
import InputField from "../Common/InputField/InputField";
import { putInquiry, Reload } from "../../contexts/actions";
import { Inquiry } from "../Inquiry/Inquiry";

const ComleteMissingDetails = ({ buttonText, inquiry }) => {
  // CALLED BY - INQUIRY
  const { missingDetails, inquiryTitle, inquiryContent } = inquiry;
  let inquiryId = inquiry._id;
  const [title, setTitle] = useState(inquiryTitle);
  const [content, setContent] = useState(inquiryContent);
  const putToServer = () => {
    let request = {
      inquiryTitle: title,
      inquiryContent: content,
    };
    putInquiry(inquiryId, request);
    Reload();
  };
  return (
    <Popup
      trigger={<button>{buttonText ? buttonText : "buttonText"}</button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <div className="inquiryDetails"></div>{" "}
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header" style={{ display: "block" }}>
            <span>השלמת פרטים חסרים</span>
            <div className="missingDetails">
              <span className="statusMessage"> הודעת המנהל</span>
              <span> {missingDetails}</span>
            </div>
          </div>
          <div className="content"></div>
          <div className="input-divs">
            <label>
              <textarea
                value={title}
                placeholder=" "
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
              <span>כותרת הפניה</span>
            </label>
          </div>
          <div className="input-divs">
            <label>
              <textarea
                value={content}
                placeholder=" "
                type="text"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <span> תוכן הפניה</span>
            </label>
          </div>
          <div className="actions">
            <button className="button" onClick={putToServer}>
              {" "}
              שליחה{" "}
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};
export default ComleteMissingDetails;
