import react, { useContext, useState } from "react";
import MentorCardGroup from "../MentorCardGroup/MentorCardGroup";
import InquiryForAdmin from "../InquiryForAdmin/InquiryForAdmin";
import "./EditInquiry.css";
import { useUserState } from "../../contexts/context";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { putInquiry, Reload } from "../../contexts/actions";
import { useHistory } from "react-router";

const EditInquiry = ({ inquiry, buttonText }) => {
  //CALLED BY - INQUIRY FOR ADMIN
  let history = useHistory();
  const { user } = useUserState();
  const {
    inquiryId: _id,
    status,
    inquiryContent,
    inquiryTitle,
    userId,
    movedToExpert,
  } = inquiry;
  const [reason, setReason] = useState("missingDetails");
  const [reasonDetails, setReasonDetails] = useState();
  const { isAdmin } = user;
  const type =
    user._id === movedToExpert.expertId ? "hereAsExpert" : "hereAsUser";
  const putToServerByAdmin = () => {
    let theField =
      reason === "irrelevant" ? "irrelevantDetails" : "missingDetails";
    let newStatus = reason === "irrelevant" ? "irrelevant" : "missingDetails";
    let option1 = {
      missingDetails: reasonDetails,
      status: newStatus,
      cancelDate: new Date(),
    };
    let option2 = {
      irrelevantDetails: { cause: "admin", reason: reasonDetails },
      status: newStatus,
      cancelDate: new Date(),
    };
    let request = reason === "irrelevant" ? option2 : option1;
    putInquiry(inquiry._id, request);
    Reload();
  };
  const putToServerByUser = () => {
    let newStatus =
      type === "hereAsExpert" ? "canceledByExpert" : "canceledByUser";
    let request = {
      cancelReason: reasonDetails,
      status: newStatus,
      cancelDate: new Date(),
    };
    putInquiry(inquiry._id, request);
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
          <div className="header"> {inquiryTitle} </div>
          <span>תוכן הפניה :{inquiryContent}</span>
          <div className="content"></div>
          {isAdmin && (
            <>
              <span>ערוך את הסטטוס של הפניה</span>
              <select
                className="meeting-kind"
                onChange={(e) => {
                  setReason(e.target.value);
                }}
              >
                <option value={"missingDetails"}>חסרים פרטים </option>
                <option value={"irrelevant"}> לא רלוונטי </option>
              </select>
              {
                <div className="input-div">
                  <label>
                    <textarea
                      placeholder=" "
                      type="text"
                      onChange={(e) => {
                        setReasonDetails(e.target.value);
                      }}
                    ></textarea>
                    <span>
                      {reason === "irrelevant"
                        ? "כתוב כאן מדוע פנייה זו אינה רלוונטית"
                        : "כתוב כאן איזה פרטים חסרים"}
                    </span>
                  </label>
                  <button onClick={putToServerByAdmin}>שלח</button>
                </div>
              }
            </>
          )}
          {!isAdmin && (
            <>
              <span>ביטול פנייה</span>
              <div className="input-divs">
                <label>
                  <textarea
                    placeholder=" "
                    type="text"
                    onChange={(e) => {
                      setReasonDetails(e.target.value);
                    }}
                  ></textarea>
                  <span>נשמח לשמוע מדוע אתה מבטל פניה זו</span>
                </label>
                <button onClick={putToServerByUser}>שלח</button>
              </div>
            </>
          )}
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
export default EditInquiry;
