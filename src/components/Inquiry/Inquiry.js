// import { Link } from "react-router-dom";
import "./Inquiry.css";
import inquiryType from "./inquiry-type.json";
import InquiryMeetingScheduled from "../InquiryMeetingScheduled/InquiryMeetingScheduled";
import { useUserState } from "../../contexts/context";

const Inquiry = ({ inquiry }) => {
  const type = "user";
  // const inquiryTitle = "כותרת_כותרת";
  const timePassed = "לפני 3 שעות";
  const { status, inquiryTitle, inquiryType } = inquiry;
  const statusMessage = "meetingScheduled";
  return statusMessage === "meetingScheduled" ? (
    <InquiryMeetingScheduled />
  ) : (
    // <Link to={"/searchforexpert"}>
    <div className="inquiryBox">
      <div className="inquiryTitle">{inquiryTitle}</div>
      <div className="timePassed">{timePassed}</div>
      <div className="statusMessage">
        &bull; {inquiryType[type][statusMessage].message}
      </div>
      {inquiryType[type][statusMessage].trueFalseButton && (
        <button className="nextStepButton">
          {inquiryType[type][statusMessage].buttonText} &nbsp;&nbsp;&gt;
        </button>
      )}
    </div>
    // </Link>
  );
};

export default Inquiry;
