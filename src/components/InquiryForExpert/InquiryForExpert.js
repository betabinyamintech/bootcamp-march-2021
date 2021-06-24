import "./InquiryForExpert.css";
import inquiryTypes from "../Inquiry/InquiryType";
import InquiryMeetingScheduled from "../InquiryMeetingScheduled/InquiryMeetingScheduled";
import { useUserState } from "../../contexts/context";
import ChooseMeetingSchedule from "../ChooseMeetingSchedule/ChooseMeetingSchedule";
import InquiryStatus from "../Inquiry/InquiryStatus";
import AdminChooseMentor from "../AdminChooseMentor/AdminChooseMentor";
import menuIcon from "../commonsSVG/menu-icon.svg";
import downArrow from "../commonsSVG/down-arrow.svg";
import upArrow from "../commonsSVG/up-arrow.svg";
import { deleteInquiry, putInquiry } from "../../contexts/actions";
import { useEffect, useState } from "react";
import MeetingArrangment from "../MeetingArrangment/MeetingArrangment";
import ActionPage from "../ActionPage/ActionPage";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const InquiryForExpert = ({ inquiry, expertsUsers }) => {
  const {
    inquiryTitle,
    inquiryContent,
    userId,
    updatedAt,
    status,
    movedToExpert,
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
  console.log("status", status);
  const values = InquiryType[type][status];
  const { message = null, trueFalseButton, buttonText } = values;
  // console.log("values", values);
  const cancelInquiry = () => {
    let request = { status: "canceledByExpert" };
    putInquiry(inquiry._id, request);
  };
  return (
    <>
      <div
        className="inquiryBox"
        onClick={() => {
          setInfoClick(!infoClick);
        }}
      >
        <span className="homeMenuIcon">
          <img alt="home" src={menuIcon}></img>
          <img
            alt="home"
            src={infoClick ? upArrow : downArrow}
            style={{ marginTop: "10px" }}
          ></img>
        </span>
        <div className="inquiryTitle">&bull; {inquiryTitle}</div>

        <div className="inquiryTitle" style={{ fontSize: "15px" }}>
          &bull; נשלחה על ידי: {userId.firstName} {userId.lastName}
        </div>
        <div className="timePassed">{`נוצרה ב:${creationDate} בשעה : ${creationTime.slice()}`}</div>
        {infoClick && (
          <>
            <div className="inquiryTitle">&bull; {inquiryContent}</div>

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
        <div className="statusMessage">
          <h6 style={{ fontSize: "13px" }}></h6>
        </div>
        <div className="statusMessage">&bull; {message} </div>

        {status === "movedToExpert" && infoClick && (
          // Component MeetingArrangment
          <ActionPage
            inquiry={inquiry}
            click={actionClick}
            setButton={() => setInfoClick(!infoClick)}
            buttonText={buttonText}
            buttonValue={infoClick}
          />
        )}
        {status === "meetingScheduled" && infoClick && (
          <InquiryMeetingScheduled inquiry={inquiry} />
        )}
        {/* {inquiryTypes && status === "movedToExpert" && infoClick && (
          <Popup
            trigger={
              <button
                className="nextStepButton"
                onClick={() => {
                  setActionClick(!actionClick);
                }}
              >
                {"אני לא רוצה לקחת פנייה זו"} &nbsp;&nbsp;&gt;
              </button>
            }
            position="center"
            nested
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "16px",
              }}
            >
              <span>אתה בטוח שברצונך לבטל פנייה זו?</span>
              <span style={{ alignSelf: "center" }}>{inquiryTitle}</span>
              <button onClick={cancelInquiry}>כן</button>
              <button>לא</button>
            </div>{" "}
          </Popup>
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
      buttonText: "קבע מועד לפגישה   ",
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
  },
};

export default InquiryForExpert;
