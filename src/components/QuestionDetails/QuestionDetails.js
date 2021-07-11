import "./QuestionDetails.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import React, { useContext } from "react";
import Button from "../Common/Button/Button";
import Avatar from "../Avatar/Avatar";
import { useUserState } from "../../contexts/context";
import MeetingArrangment from "../MeetingArrangment/MeetingArrangment";
import ActionPage from "../ActionPage/ActionPage";
import { putInquiry, Reload } from "../../contexts/actions";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import EditInquiry from "../EditInquiry/EditInquiry";
import SmallButton from "../Common/SmallButton/SmallButton";
const QuestionDetails = ({ inquiry, buttonText }) => {
  console.log("inquiry by question details screen", inquiry);
  const user = useUserState().user;
  let { isExpert } = user;
  const { userId, inquiryTitle, inquiryContent, movedToExpert, status, _id } =
    inquiry;
  const { firstName, lastName, city, imageSrc } = userId;
  const { answersToExpertQuestions } = movedToExpert;
  const refuseThisInquiry = () => {
    let inquiryId = _id;
    let request = { refusedBy: user._id };
    putInquiry(inquiryId, request);
    Reload();
  };
  return (
    <Popup
      trigger={<SmallButton isIcon={true}>צפה בפרטי הפניה</SmallButton>}
      modal
      nested
    >
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
                {answersToExpertQuestions &&
                  answersToExpertQuestions.map((question) => {
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
              <span onClick={refuseThisInquiry}>מצטער,הפעם לא אוכל לעזור</span>
            </div>
          </div>
          <div className="actions">
            {/* <button
              className="button"
            
            >
              סגירה
            </button> */}
            {!isExpert &&
              status !== "irrelevant" &&
              status !== "canceledByExpert" &&
              status !== "canceledByUser" && (
                <EditInquiry inquiry={inquiry} buttonText={"בטל פנייה זו"} />
              )}
          </div>
        </div>
      )}
    </Popup>
  );
};
export default QuestionDetails;
