import "./Inquiry.css";
import inquiryTypes from "./InquiryType";
import InquiryMeetingScheduled from "../InquiryMeetingScheduled/InquiryMeetingScheduled";
import { useUserState } from "../../contexts/context";
import ChooseMeetingSchedule from "../ChooseMeetingSchedule/ChooseMeetingSchedule";
import InquiryStatus from "./InquiryStatus";

const Inquiry = ({ inquiry }) => {
  const user = useUserState().user;
  const { isAdmin, isExpert } = user;
  const type = isAdmin ? "admin" : isExpert ? "expert" : "user";
  const { status, inquiryTitle, timePassed, inquiryContent } = inquiry;
  // const status = "responseFromExpert";
  // const status = "meetingScheduled";
  console.log(type, status);
  const values = InquiryType[type][status];
  console.log("values", values);
  const { message = null, trueFalseButton, buttonText } = values;
  // const status = "meetingScheduled";
  return (
    <>
      <div className="inquiryBox">
        <div className="timePassed">{timePassed}</div>
        <div className="inquiryTitle">&bull; {inquiryTitle}</div>
        <div className="statusMessage">&bull; {message}</div>
      </div>
      {status === "responseFromExpert" && (
        <ChooseMeetingSchedule inquiry={inquiry} />
      )}
      {status === "meetingScheduled" && (
        <InquiryMeetingScheduled inquiry={inquiry} />
      )}
      {inquiryTypes && (
        <button className="nextStepButton">
          {buttonText} &nbsp;&nbsp;&gt;
        </button>
      )}
    </>
  );
};

const InquiryType = {
  user: {
    [InquiryStatus.OPENED]: {
      message: "קיבלנו את פנייתך",
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
    meetingDatePassed: {
      message: "הפגישה התקיימה",
      trueFalseButton: false,
    },
    irrelevant: {
      message: "לא רלוונטי",
      trueFalseButton: false,
    },
  },
  expert: {
    movedToExpert: {
      message: "",
      trueFalseButton: "?",
    },
    responseFromExpert: {
      message: "??????????????",
      trueFalseButton: "???",
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
    open: {
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

export default Inquiry;
