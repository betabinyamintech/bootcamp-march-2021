import "./Inquiry.css";
import inquiryTypes from "./InquiryType";
import InquiryMeetingScheduled from "../InquiryMeetingScheduled/InquiryMeetingScheduled";
import { useUserState } from "../../contexts/context";
import ChooseMeetingSchedule from "../ChooseMeetingSchedule/ChooseMeetingSchedule";
import InquiryStatus from "./InquiryStatus";
import AdminChooseMentor from "../AdminChooseMentor/AdminChooseMentor";
import menuIcon from "../commonsSVG/menu-icon.svg";
import { deleteInquiry } from "../../contexts/actions";
import { useState } from "react";

export const Inquiry = ({ inquiry }) => {
  const user = useUserState().user;
  const [clicked, setClicked] = useState(false);
  const { isAdmin, isExpert } = user;
  const type = isAdmin ? "admin" : isExpert ? "expert" : "user";
  const { status, inquiryTitle, timePassed, inquiryContent, createdAt, _id } =
    inquiry;
  const values = InquiryType[type][status];
  console.log("values", values);
  const { message = null, trueFalseButton, buttonText } = values;
  let creationDate = new Date(createdAt).toLocaleDateString();
  let creationTime = new Date(createdAt).toLocaleTimeString();
  return (
    <>
      <div className="inquiryBox">
        <span
          className="homeMenuIcon"
          onClick={() => {
            deleteInquiry(_id);
          }}
        >
          <img alt="home" src={menuIcon}></img>
        </span>
        <div className="inquiryTitle">&bull; {inquiryTitle}</div>
        <div className="timePassed">{`נוצרה ב:${creationDate} בשעה : ${creationTime.slice(
          0,
          5
        )}`}</div>
        <div className="statusMessage">
          <h6 style={{ fontSize: "13px" }}></h6>
        </div>
        <div className="statusMessage">&bull; {message}</div>

        {status === "responseFromExpert" && clicked && (
          <ChooseMeetingSchedule inquiry={inquiry} />
        )}
        {status === "meetingScheduled" && clicked && (
          <InquiryMeetingScheduled inquiry={inquiry} />
        )}
        {status === "open" && type === "expert" && (
          <AdminChooseMentor inquiry={inquiry} />
        )}
        {inquiryTypes && status !== "opened" && status !== "irrelevant" && (
          <button
            className="nextStepButton"
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            {buttonText} &nbsp;&nbsp;&gt;
          </button>
        )}
      </div>
    </>
  );
};

export const InquiryType = {
  user: {
    [InquiryStatus.OPENED]: {
      message: "פנייה חדשה",
      trueFalseButton: false,
    },
    [InquiryStatus.MISSING_DETAILS]: {
      message: "חסרים פרטים",
      trueFalseButton: true,
      buttonText: "השלם פרטים",
    },
    matchesFound: {
      message: "נמצאו xxxxx מומחים מתאימים",
      trueFalseButton: true,
      buttonText: "בחירת מומחה",
    },
    movedToExpert: {
      message: "עבר למומחה",
      trueFalseButton: false,
    },
    responseFromExpert: {
      message: "קיבלת תגובה ממומחה!",
      trueFalseButton: true,
      buttonText: "צפיה בתגובה",
    },
    meetingScheduled: {
      message: "נקבע תאריך לפגישה!",
      trueFalseButton: true,
      buttonText: "צפיה בפגישה",
    },
    meetingWas: {
      message: "הפגישה התקיימה",
      trueFalseButton: false,
    },
    irrelevant: {
      message: "לא רלוונטי",
      trueFalseButton: false,
    },
  },
  expert: {
    [InquiryStatus.OPENED]: {
      message: "פנייה חדשה",
      trueFalseButton: false,
    },
    [InquiryStatus.MISSING_DETAILS]: {
      message: "חסרים פרטים",
      trueFalseButton: true,
      buttonText: "השלם פרטים",
    },
    matchesFound: {
      message: "נמצאו xxxxx מומחים מתאימים",
      trueFalseButton: true,
      buttonText: "בחירת מומחה",
    },

    movedToExpert: {
      message: "הועבר למומחה",
      trueFalseButton: "?",
    },
    responseFromExpert: {
      message: "התקבלה תגובה ממומחה",
      trueFalseButton: "???",
    },
    meetingScheduled: {
      message: "נקבע תאריך לפגישה!",
      trueFalseButton: true,
      buttonText: "צפיה בפגישה",
    },
    meetingWas: {
      message: "הפגישה התקיימה",
      trueFalseButton: false,
    },
    irrelevant: {
      message: "לא רלוונטי",
      trueFalseButton: false,
    },
  },
  admin: {
    opened: {
      message: "ממתין לשיוך למומחים",
      trueFalseButton: true,
      buttonText: "צפיה בפניה",
    },
    missingDetails: {
      message: "חסרים פרטים",
      trueFalseButton: true,
      buttonText: "השלם פרטים",
    },
    matchesFound: {
      message: "ממתין לבחירת מומחה",
      trueFalseButton: false,
    },
    movedToExpert: {
      message: "עבר למומחה",
      trueFalseButton: false,
    },
    responseFromExpert: {
      message: "קיבלת תגובה ממומחה!",
      trueFalseButton: true,
      buttonText: "צפיה בתגובה",
    },
    meetingWas: {
      message: "הפגישה התקיימה",
      trueFalseButton: false,
    },
    irrelevant: {
      message: "לא רלוונטי",
      trueFalseButton: false,
    },
  },
};

//commented out since instead we need to export both modules:
// export default {Inquiry};
