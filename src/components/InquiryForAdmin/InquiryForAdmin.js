import "./InquiryForAdmin.css";
import { Table, Tag, Space } from "antd";
import inquiryTypes from "../Inquiry/InquiryType";
import InquiryMeetingScheduled from "../InquiryMeetingScheduled/InquiryMeetingScheduled";
import { useUserState } from "../../contexts/context";
import { useState } from "react";
import ActionPage from "../ActionPage/ActionPage";
import EditInquiry from "../EditInquiry/EditInquiry";
import QuestionDetails from "../QuestionDetails/QuestionDetails";
const InquiryForAdmin = ({ inquiry, expertsUsers }) => {
  const {
    inquiryTitle,
    inquiryContent,
    userId,
    updatedAt,
    status,
    movedToExpert,
  } = inquiry;
  const user = useUserState().user;
  const fromAdminSide = true;
  const [clicked, setClicked] = useState(true);
  // const [showQuestion, setShowQuestion] = useState(false);
  const { isAdmin, isExpert } = user;
  let creationDate = new Date(updatedAt).toLocaleDateString();
  let creationTime = new Date(updatedAt).toLocaleTimeString();
  const type = isAdmin ? "admin" : isExpert ? "expert" : "user";
  const values = InquiryType[type][status];
  // console.log("values", values);
  const { message = null, trueFalseButton, buttonText } = values;
  return (
    <>
      <div className="inquiryBox-admin">
        <div className="inquiryTitle-admin">&bull; {inquiryTitle}</div>
        <div className="inquiryTitle-admin">
          &bull; שם: {userId.firstName} {userId.lastName}
        </div>
        <div className="timePassed-admin">{`נוצרה ב:${creationDate} בשעה : ${creationTime.slice(
          0,
          5
        )}`}</div>

        <div className="statusMessage-admin">&bull;סטטוס: {message}</div>
        {status === "movedToExpert" && (
          <div className="statusMessage-admin">
            &bull;עבר אל:{" "}
            {`${movedToExpert.expertId.firstName}   ${movedToExpert.expertId.lastName}, ${movedToExpert.expertId.profession}`}
          </div>
        )}
        {status === "meetingScheduled" && (
          <InquiryMeetingScheduled inquiry={inquiry} />
        )}
        {status === "opened" && type === "admin" && clicked && (
          <ActionPage
            inquiry={inquiry}
            buttonText={buttonText}
            buttonValue={clicked}
            // setButton={setClicked(!clicked)}
          />
        )}
        {<EditInquiry inquiry={inquiry} buttonText={"ערוך פנייה זו"} />}
        {/* {inquiryTypes && status !== "irrelevant" && (
          <button>בטל פנייה זו</button>
        )} */}
      </div>
    </>
  );
};
export const InquiryType = {
  admin: {
    opened: {
      type: "opened",
      message: "ממתין לשיוך למומחים",
      trueFalseButton: true,
      buttonText: "חפש מומחים מתאימים",
    },
    missingDetails: {
      type: "missingDetails",

      message: "נשלח לפונה לטובת השלמת פרטים ",
      trueFalseButton: true,
      buttonText: "בדוק אילו פרטים חסרים ",
    },
    matchesFound: {
      type: "matchesFound",

      message: " ממתין לבחירת מומחה על ידי הפונה",
      trueFalseButton: false,
    },
    movedToExpert: {
      type: "movedToExpert",

      message: "עבר למומחה",
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
    canceledByUser: {
      type: "canceledByUser",
      message: "פנייה בוטלה על ידי שולח הפנייה",
      trueFalseButton: false,
    },
    canceledByExpert: {
      type: "canceledByExpert",
      message: "פנייה בוטלה על ידי המומחה",
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
    refusedByExpert: {
      type: "refusedByExpert",
      message: "המומחה דחה פנייה זו    ",
      trueFalseButton: true,
      buttonText: "מצא מומחים נוספים",
    },
  },
};

export default InquiryForAdmin;
