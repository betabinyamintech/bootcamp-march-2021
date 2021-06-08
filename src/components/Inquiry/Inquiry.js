import "./Inquiry.css";
import inquiryTypes from "./InquiryType";
import InquiryMeetingScheduled from "../InquiryMeetingScheduled/InquiryMeetingScheduled";
import { useUserState } from "../../contexts/context";
import ChooseMeetingSchedule from "../ChooseMeetingSchedule/ChooseMeetingSchedule";
import InquiryStatus from "./InquiryStatus";
import AdminChooseMentor from "../AdminChooseMentor/AdminChooseMentor";

export const Inquiry = ({ inquiry }) => {
  const user = useUserState().user;
  const { isAdmin, isExpert } = user;
  const type = isAdmin ? "admin" : isExpert ? "expert" : "user";
  const { status, inquiryTitle, timePassed, inquiryContent, createdAt } =
    inquiry;
  const values = InquiryType[type][status];
  // console.log("values", values);
  const { message = null, trueFalseButton, buttonText } = values;
  console.log("created" + createdAt);
  let creationDate = new Date(createdAt).toLocaleDateString();
  let creationTime = new Date(createdAt).toLocaleTimeString();
  return (
    <>
      <div className="inquiryBox">
        <div className="timePassed">{timePassed}</div>
        <div className="inquiryTitle">&bull; {inquiryTitle}</div>
        <div className="statusMessage">&bull; {message}</div>
        <div className="statusMessage">
          &bull; {creationTime.slice(0, 4) + creationDate}
        </div>

        {status === "responseFromExpert" && (
          <ChooseMeetingSchedule inquiry={inquiry} />
        )}
        {status === "meetingScheduled" && (
          <InquiryMeetingScheduled inquiry={inquiry} />
        )}
        {status === "open" && type === "expert" && (
          <AdminChooseMentor inquiry={inquiry} />
        )}
        {inquiryTypes && status !== "opened" && status !== "irrelevant" && (
          <button className="nextStepButton">
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
      message: "הועבר למומחה",
      trueFalseButton: "?",
    },
    responseFromExpert: {
      message: "התקבלה תגובה ממומחה",
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

//commented out since instead we need to export both modules:
// export default {Inquiry};
