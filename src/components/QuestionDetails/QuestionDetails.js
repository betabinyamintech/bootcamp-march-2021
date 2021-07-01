import "./QuestionDetails.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import React, { useContext } from "react";
import Button from "../Common/Button/Button";
import Avatar from "../Avatar/Avatar";
import { useUserState } from "../../contexts/context";
import MeetingArrangment from "../MeetingArrangment/MeetingArrangment";
import ActionPage from "../ActionPage/ActionPage";
import { putInquiry, reload } from "../../contexts/actions";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
const QuestionDetails = ({ inquiry, buttonText }) => {
  const user = useUserState().user;
  const { userId, inquiryTitle, inquiryContent, movedToExpert, status, _id } =
    inquiry;
  const { firstName, lastName, city, imageSrc } = userId;
  const { answersToExpertQuestions } = movedToExpert;
  const refuseThisInquiry = () => {
    let inquiryId = _id;
    let request = { refusedBy: user._id };
    putInquiry(inquiryId, request);
    reload();
  };
  return (
    <Popup trigger={<button>צפה בפרטי הפניה</button>} modal nested>
      {(close) => (
        <div className="modal">
          {/* <div className="inquiryDetails"></div>{" "} */}
          <PreviousButton onClick={close} />
          {/* <div className="header"> {inquiryTitle} </div> */}
          <div className="content">
            <div style={{ display: "flex", flexFlow: "column nowrap" }}>
              <div className="openingText">
                {user.firstName},<br /> ל{userId.firstName} מהיישוב{" "}
                {userId.city} יש שאלה, וחשבנו שאתה תוכל לעזור לו
              </div>
              <div className="questionDetails">
                <div className="userDetails">
                  <Avatar
                    avater={imageSrc}
                    height="50px"
                    width="50px"
                    margin="0px"
                  />
                  <span className="askerDetails">
                    {`${firstName}  ${lastName}, ${city}`}{" "}
                  </span>
                </div>
                <div className="title">{inquiryTitle}</div>
                <div className="inquiryText">{inquiryContent}</div>
                {answersToExpertQuestions.map((question) => {
                  return (
                    <>
                      {status !== "meetingScheduled" && (
                        <div className="questionAndAnswers">
                          <div className="questionBox">
                            <br></br>
                            {question.question}
                          </div>

                          <div className="answerBox">{question.ans}</div>
                        </div>
                      )}

                      {/* {status === "meetingScheduled" && (
                    <InquiryMeetingScheduled inquiry={inquiry} />
                  )} */}
                    </>
                  );
                })}
              </div>
              <ActionPage inquiry={inquiry} buttonText={buttonText} />
              <button
                style={{ background: "#e6506b" }}
                onClick={refuseThisInquiry}
              >
                מצטער,הפעם לא אוכל לעזור
              </button>
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
export default QuestionDetails;
