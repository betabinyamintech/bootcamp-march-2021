import React from "react";
import OneMeetingDetailsDisplay from "./OneMeetingDetailsDisplay";
import ExpertDetailsHeader from "./ExpertDetailsHeader";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import tickForButton from "../Common/tickForButton.svg";
import inquiriesJson from "../Home/inquiries.json";
import Button from "../Common/Button/Button";
// import experts from "./experts.json";

// user is offered 3 dates, each is a string in format: 03/10/2021 12:00 AM

let d = new Date();

const expert = {
  firstName: "משה ",
  lastName: "ארביב",
  profession: "רואה חשבון",
  city: "ירושלים",
  imageSrc:
    "https://thumbnail.imgbin.com/17/14/1/imgbin-user-ms-attendant-avatar-vRH5HKwaP0G2ABiJFCqhiGjT5_t.jpg",
  expertDetails: {
    meetingPlace: "zoom",
    lengthMeeting: "30 דקות",
  },
};

const ChooseMeetingSchedule = ({ optinalDates }) => {
  const inquiries = inquiriesJson;
  const optionalDates = inquiries[0].user.meetingOptions.optionalDates;
  const inquiryStatus = inquiries[0].user.status;
  return (
    <div>
      <div className="pageTitle">בחירת מועד לפגישה</div>
      <div className="subTitle">{expert.expertDetails.lengthMeeting} פגישה</div>
      <ExpertDetailsHeader expert={expert} />
      {optionalDates.map((dateTime) => (
        <OneMeetingDetailsDisplay dateTime={dateTime} />
      ))}
      <div className="buttonDiv">
        <Button img={tickForButton} style={{ width: "120%" }}>
          אישור
        </Button>
      </div>
      <div
        className="footerText"
        onClick={() => {
          alert(
            "Stopping request process, set route to go back to login screen"
          );
        }}
      >
        .תודה, כבר הסתדרתי
      </div>
    </div>
  );
};

export default ChooseMeetingSchedule;
