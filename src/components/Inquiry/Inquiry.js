import "./Inquiry.css";
import inquiryTypes from "./InquiryType";
import InquiryMeetingScheduled from "../InquiryMeetingScheduled/InquiryMeetingScheduled";
import { useUserDispatch, useUserState } from "../../contexts/context";
import ChooseMeetingSchedule from "../ChooseMeetingSchedule/ChooseMeetingSchedule";
import InquiryStatus from "./InquiryStatus";
import AdminChooseMentor from "../AdminChooseMentor/AdminChooseMentor";
import menuIcon from "../commonsSVG/menu-icon.svg";
import { deleteInquiry, getSpecificUser } from "../../contexts/actions";
import { useEffect, useState } from "react";
import MeetingArrangment from "../MeetingArrangment/MeetingArrangment";
import MentorCardGroup from "../MentorCardGroup/MentorCardGroup";
import ActionPage from "../ActionPage/ActionPage";

export const Inquiry = ({ inquiry, expertsUsers }) => {
  const user = useUserState().user;
  const theExperts = useUserState().expertsFound;
  const userDispatch = useUserDispatch();
  const fromUserSide = true;
  const [clicked, setClicked] = useState(false);
  const [theExpert, setTheExpert] = useState();
  let [expertsFoundForInquiry, setExpertsFoundForInquiry] = useState([]);
  const { isAdmin, isExpert } = user;
  const type = isAdmin ? "admin" : isExpert ? "expert" : "user";
  const { status, inquiryTitle, inquiryContent, createdAt, _id, expertsFound } =
    inquiry;
  const values = InquiryType[type][status];
  // console.log("values", values);
  const { message = null, trueFalseButton, buttonText } = values;
  let creationDate = new Date(createdAt).toLocaleDateString();
  let creationTime = new Date(createdAt).toLocaleTimeString();
  let count = 0;
  // useEffect(() => {
  //   expertsFound &&
  //     expertsFound.map(async (expertId) => {
  //       let response = await fetch(`http://localhost:5000/users/${expertId}`, {
  //         method: "GET",
  //       });
  //       status === "matchesFound" &&
  //         console.log("experts found length", expertsFound.length);
  //       let data = await response.json();
  //       // console.log("expertsFound", expertsFound);
  //       let expertsCheck = [...expertsFoundForInquiry];
  //       expertsCheck.push(data);
  //       setExpertsFoundForInquiry(expertsCheck);
  //     });
  // }, [isAdmin]);
  // useEffect(() => {
  //   let get = async () => {
  //     let expertId = inquiry.movedToExpert.expertId;
  //     let response = await fetch(`http://localhost:5000/users/${expertId}`, {
  //       method: "GET",
  //     });
  //     let expert = await response.json();
  //     setTheExpert(expert);
  //   };
  // });
  // useEffect(() => {
  //   let get = async () => {
  //     const expertId = inquiry.movedToExpert.expertId;
  //     let response = await fetch(`http://localhost:5000/users/${expertId}`, {
  //       method: "GET",
  //     });
  //     let data = await response.json();
  //     setTheExpert(data);
  //   };
  //   get();
  // }, [isAdmin]);
  // useEffect(() => {
  //   let getTheExpert = async () => {
  //     const expertId = inquiry.movedToExpert.expertId;

  //     let response = fetch(`localhost:5000${expertId}`, { method: "GET" });
  //     let data = (await response).json();

  //     let response = await getSpecificUser(expertId);
  //     let data = await response.json();
  //     setTheExpert(data);
  //     console.log("response by inquiry", response);
  //   };
  //   getTheExpert();
  // }, []);
  // let getTheExpert = async () => {
  //   const expertId = inquiry.movedToExpert.expertId;
  //   console.log("expertId", expertId);
  //   let response = await getSpecificUser(expertId);
  //   // let data = await response.json();
  //   // setTheExpert(data);
  //   console.log("response by inquiry", response);
  // };
  // getTheExpert();

  // console.log("by inq", expertsFoundForInquiry);

  if (!expertsFoundForInquiry) {
    // Add loading animation
    return <span> loading</span>;
  } else {
    return (
      <>
        <div
          className="inquiryBox"
          onClick={() => {
            // console.log("inq id", inquiry._id);
            // console.log("inquiry details", inquiry);
          }}
        >
          <span
            className="homeMenuIcon"
            // onClick={() => {
            //   deleteInquiry(_id);
            // }}
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
            // Component - ChooseMeetingSchedule -V
            <ActionPage inquiry={inquiry} />
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
          {status === "matchesFound" && expertsFoundForInquiry && (
            // Component-MentorGroupCard -V
            <ActionPage
              inquiry={inquiry}
              theExpert={theExpert}
              expertsFoundForInquiry={expertsFoundForInquiry}
              buttonValue={clicked}
              setButton={() => setClicked(!clicked)}
              buttonText={buttonText}
            />
          )}
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
      message: "הפנייה נשלחה ,מחפשים לך מומחים מתאימים ",
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
      buttonText: "צפיה בתגובה",
    },
    meetingScheduled: {
      type: "meetingScheduled",
      message: "נקבע תאריך לפגישה!",
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
  },
  expert: {
    [InquiryStatus.OPENED]: {
      type: "opened",
      message: "הפנייה נשלחה ,מחפשים לך מומחים מתאימים ",
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
      message: "נמצאו xxxxx מומחים מתאימים",
      trueFalseButton: true,
      buttonText: "בחירת מומחה",
    },

    movedToExpert: {
      type: "movedToExpert",
      message: "עבר למומחה",
      trueFalseButton: false,
      buttonText: " ",
    },
    responseFromExpert: {
      type: "responseFromExpert",
      message: "קיבלת תגובה ממומחה!",
      trueFalseButton: true,
      buttonText: "צפיה בתגובה",
    },
    meetingScheduled: {
      type: "meetingScheduled",
      message: "נקבע תאריך לפגישה!",
      trueFalseButton: true,
      buttonText: "צפיה בפגישה",
    },
    meetingDatePassed: {
      type: "meetingDatePassed",
      message: "הפגישה התקיימה",
      trueFalseButton: false,
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
    meetingDatePassed: {
      type: "meetingDatePassed",
      message: "הפגישה התקיימה",
      trueFalseButton: false,
    },
    irrelevant: {
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
      message: "פנייה בוטלה על ידי המומחה ",
      trueFalseButton: false,
    },
  },
};

//commented out since instead we need to export both modules:
// export default {Inquiry};
