import "../InquiryForExpert/InquiryStyles.css";
import { useUserDispatch, useUserState } from "../../contexts/context";
import InquiryStatus from "./InquiryStatus";
import { useState } from "react";
import ActionPage from "../ActionPage/ActionPage";
import EditInquiry from "../EditInquiry/EditInquiry";
import CompleteMissingDetails from "../CompleteMissingDetails/ComleteMissingDetails";
import clockIcon from "../commonsSVG/clock-icon2.svg";
import telegramIcon from "../commonsSVG/telegram-icon.svg";
import matchesFoundIcon from "../commonsSVG/matches-found-icon.svg";
import meetingScheduleIcon from "../commonsSVG/meeting-schedule-icon.svg";
export const Inquiry = ({ inquiry, expertsUsers }) => {
  const user = useUserState().user;
  const theExperts = useUserState().expertsFound;
  const userDispatch = useUserDispatch();
  const fromUserSide = true;
  const [clicked, setClicked] = useState(false);
  const [icon, setIcon] = useState();
  const [theExpert, setTheExpert] = useState();
  let [expertsFoundForInquiry, setExpertsFoundForInquiry] = useState([]);
  const { isAdmin, isExpert } = user;
  const type = isAdmin ? "admin" : "user";
  const {
    status,
    inquiryTitle,
    inquiryContent,
    createdAt,
    _id,
    irrelevantDetails,
    missingDetails,
    cancelReason,
    expertsFound,
  } = inquiry;
  const values = InquiryType[type][status];
  const { message = null, trueFalseButton, buttonText } = values;
  let creationDate = new Date(createdAt).toLocaleDateString();
  // let creationTime = new Date(createdAt).toLocaleTimeString();
  let day = new Date(createdAt).getDate();
  let month = new Date(createdAt).getMonth() + 1;
  let newDate = `${day}/${month}`;

  if (!expertsFoundForInquiry) {
    // Add loading animation
    return <span> loading</span>;
  } else {
    return (
      <>
        <div className="inquiryBox">
          <div className="inquiryTitle">{inquiryTitle}</div>
          <div className="timePassed">
            <span>
              <img
                src={clockIcon}
                alt="clock"
                style={{ marginTop: "10px", marginRight: "12px" }}
              ></img>
            </span>
            <span style={{ marginRight: "6px", marginTop: "7px" }}>
              {`נוצרה ב: ${newDate.slice(0, 3)}/21`}
            </span>
          </div>
          <div className="statusMessage">
            <img
              src={telegramIcon}
              alt="telegram Icon"
              style={{ marginRight: "5px" }}
            ></img>
            <span style={{ marginRight: "6px" }}>{message}</span>
          </div>
          {status === "irrelevant" && (
            <div className="questionAndAnswer">
              <div className="statusMessage"> הודעת המנהל</div>

              <div className="inquiryTitle" style={{ fontSize: "15px" }}>
                {irrelevantDetails}
              </div>
            </div>
          )}
          {status === "canceledByExpert" && (
            <div className="questionAndAnswer">
              <div className="statusMessage"> סיבת הביטול </div>

              <div className="inquiryTitle" style={{ fontSize: "15px" }}>
                {cancelReason}
              </div>
            </div>
          )}
          {status === "missingDetails" && (
            <div className="questionAndAnswer">
              <div className="statusMessage">&bull; הודעת המנהל</div>
              <div className="inquiryTitle" style={{ fontSize: "15px" }}>
                {missingDetails}
              </div>
              <div className="statusMessage"></div>
            </div>
          )}

          {status === "responseFromExpert" && (
            // Component - ChooseMeetingSchedule -V
            <ActionPage
              inquiry={inquiry}
              buttonValue={clicked}
              setButton={() => setClicked(!clicked)}
              buttonText={buttonText}
            />
          )}
          {status === "meetingScheduled" && (
            // Component - InquiryMeetingScheduled -V -- fetch?
            <ActionPage
              inquiry={inquiry}
              buttonValue={clicked}
              setButton={() => setClicked(!clicked)}
              buttonText={buttonText}
            />
          )}
          {status === "matchesFound" && (
            // Component-MentorGroupCard -V
            <ActionPage
              inquiry={inquiry}
              theExpert={theExpert}
              buttonText={buttonText}
            />
          )}
          {status === "refusedByExpert" && (
            // Component-MentorGroupCard -V
            <ActionPage
              inquiry={inquiry}
              theExpert={theExpert}
              buttonText={buttonText}
            />
          )}
          {status === "missingDetails" && (
            <CompleteMissingDetails inquiry={inquiry} buttonText={buttonText} />
          )}
          {/* {status !== "irrelevant" &&
            status !== "canceledByExpert" &&
            status !== "canceledByUser" && (
              <EditInquiry inquiry={inquiry} buttonText={"בטל פנייה זו"} />
            )} */}

          {/* {inquiryTypes && status !== "opened" && status !== "irrelevant" && (
            <button
              className="nextStepButton"
              onClick={() => {
                setClicked(!clicked);
              }}
            >
              {!clicked ? buttonText : "סגירה"} &nbsp;&nbsp;&gt;
            </button>
          )} */}
        </div>
      </>
    );
  }
};

export const InquiryType = {
  user: {
    [InquiryStatus.OPENED]: {
      type: "opened",
      message: "  השאלה התקבלה אצלנו  ",
      trueFalseButton: false,
    },
    [InquiryStatus.MISSING_DETAILS]: {
      type: "missingDetails",
      message: "חסרים פרטים",
      trueFalseButton: true,
      buttonText: "השלם פרטים",
    },
    matchesFound: {
      type: "matchesFound",
      message: `נמצאו מומחים מתאימים!!!`,
      trueFalseButton: true,
      buttonText: "בחירת מומחה",
    },
    movedToExpert: {
      type: "movedToExpert",
      message: "הפנייה עברה לתיאום עם המומחה שבחרת ",
      trueFalseButton: false,
    },
    responseFromExpert: {
      type: "responseFromExpert",
      message: "קיבלת תגובה ממומחה!",
      trueFalseButton: true,
      buttonText: "לבחירת תאריך לפגישה ",
    },
    meetingScheduled: {
      type: "meetingScheduled",
      message: " נפגשים בקרוב",
      trueFalseButton: true,
      buttonText: "צפיה בפגישה",
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
      message: "פנייה בוטלה על ידך",
      trueFalseButton: false,
    },
    canceledByExpert: {
      type: "canceledByExpert",
      message: "פנייה בוטלה על ידי המומחה",
      trueFalseButton: false,
    },
    refusedByExpert: {
      type: "refusedByExpert",
      message: "המומחה שבחרת אינו יכול לעזור לך",
      trueFalseButton: false,
      buttonText: "בחר מומחה אחר",
    },
  },
};
