import "./InquiryStyles.css";
import InquiryMeetingScheduled from "../InquiryMeetingScheduled/InquiryMeetingScheduled";
import { useUserState } from "../../contexts/context";
import downArrow from "../commonsSVG/down-arrow.svg";
import upArrow from "../commonsSVG/up-arrow.svg";
import { useState } from "react";
import ActionPage from "../ActionPage/ActionPage";
import EditInquiry from "../EditInquiry/EditInquiry";
import clockIcon from "../commonsSVG/clock-icon2.svg";
import "reactjs-popup/dist/index.css";
import QuestionDetails from "../QuestionDetails/QuestionDetails";
import telegramIcon from "../commonsSVG/telegram-icon.svg";

const InquiryForExpert = ({ inquiry, expertsUsers }) => {
  const {
    inquiryTitle,
    inquiryContent,
    userId,
    updatedAt,
    status,
    movedToExpert,
    cancelReason,
  } = inquiry;
  const { answersToExpertQuestions } = movedToExpert;
  const user = useUserState().user;
  const fromAdminSide = true;
  const [actionClick, setActionClick] = useState(false);
  const [infoClick, setInfoClick] = useState(false);
  const { isAdmin, isExpert } = user;
  let creationDate = new Date(updatedAt).toLocaleDateString();
  let creationTime = new Date(updatedAt).toLocaleTimeString();
  const type = isAdmin ? "admin" : isExpert ? "expert" : "user";
  const values = InquiryType[type][status];
  const { message = null, trueFalseButton, buttonText } = values;
  // const cancelInquiry = () => {
  //   let request = { status: "canceledByExpert" };
  //   putInquiry(inquiry._id, request);
  // };
  return (
    <>
      <div
        className="inquiryBox"
        // onClick={() => {
        //   setInfoClick(!infoClick);
        // }}
      >
        <div className="inquiryTitle"> {inquiryTitle}</div>
        <div className="timePassed">
          <img src={clockIcon} alt="clock"></img>
          {`נוצרה ב:${creationDate} בשעה : ${creationTime.slice(0, 5)}`}
        </div>{" "}
        {infoClick && (
          <>
            <div className="inquiryTitle"> {inquiryContent}</div>

            {answersToExpertQuestions.map((question) => {
              return (
                <>
                  {status !== "meetingScheduled" && (
                    <div className="questionAndAnswer">
                      <div
                        className="inquiryTitle"
                        style={{ fontSize: "15px" }}
                      >
                        שאלה:{question.question}
                      </div>

                      <div
                        className="inquiryTitle"
                        style={{ fontSize: "15px" }}
                      >
                        תשובה:{question.ans}{" "}
                      </div>
                    </div>
                  )}

                  {/* {status === "meetingScheduled" && (
                    <InquiryMeetingScheduled inquiry={inquiry} />
                  )} */}
                </>
              );
            })}
          </>
        )}
        {status === "canceledByUser" && (
          <div className="questionAndAnswer">
            <div className="statusMessage">&bull; סיבת הביטול </div>

            <div className="inquiryTitle" style={{ fontSize: "15px" }}>
              {cancelReason}
            </div>
          </div>
        )}
        <div className="statusMessage">
          <img
            src={telegramIcon}
            alt="telegram Icon"
            style={{ marginRight: "5px" }}
          ></img>
          <span style={{ marginRight: "6px" }}>{message}</span>
        </div>{" "}
        {status === "movedToExpert" && (
          // Component MeetingArrangment
          <QuestionDetails inquiry={inquiry} buttonText={buttonText} />
        )}
        {status === "meetingScheduled" && (
          <ActionPage
            inquiry={inquiry}
            setButton={() => setInfoClick(!infoClick)}
            buttonText={buttonText}
            buttonValue={infoClick}
          />
        )}
        {/* {status !== "irrelevant" &&
          status !== "canceledByExpert" &&
          status !== "canceledByUser" && (
            <EditInquiry inquiry={inquiry} buttonText={"בטל פנייה זו"} />
          )} */}
        {/* <button
          className="nextStepButton"
          onClick={() => {
            setInfoClick(!infoClick);
          }}
        >
          {infoClick ? "סגירה" : "צפייה בפרטי הפניה"} &nbsp;&nbsp;&gt;
        </button> */}
      </div>
    </>
  );
};
export const InquiryType = {
  expert: {
    movedToExpert: {
      type: "movedToExpert",
      message: "הפונה בחר אותך מבין המומחים שהצענו לו",
      trueFalseButton: false,
      buttonText: "   אשמח לעזור! בואו נקבע מועד לפגישה  ",
    },
    meetingScheduled: {
      type: "meetingScheduled",
      message: "נקבע תאריך לפגישה!",
      trueFalseButton: true,
      buttonText: "צפיה בפגישה",
    },
    responseFromExpert: {
      type: "responseFromExpert",
      message: "הפניה נשלחה לפונה לטובת בחירת מועד",
      trueFalseButton: true,
      buttonText: "צפיה בתגובה",
    },
    meetingDatePassed: {
      type: "meetingDatePassed",
      message: "הפגישה התקיימה",
      trueFalseButton: false,
    },
    irrelevant: {
      type: "irrelevant",
      message: "לא רלוונטי",
      trueFalseButton: false,
    },
    canceledByUser: {
      type: "canceledByUser",
      message: "פנייה בוטלה על ידי שולח הפניה",
      trueFalseButton: false,
    },
    canceledByExpert: {
      type: "canceledByExpert",
      message: "פנייה בוטלה על ידיך ",
      trueFalseButton: false,
    },
    refusedByExpert: {
      type: "refusedByExpert",
      message: "המומחה דחה פנייה זו    ",
      trueFalseButton: false,
    },
  },
};

export default InquiryForExpert;
