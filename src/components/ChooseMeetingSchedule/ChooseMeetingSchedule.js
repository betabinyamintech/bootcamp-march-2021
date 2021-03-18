import React from "react";
import OneMeetingDetailsDisplay from "./OneMeetingDetailsDisplay";
import ExpertDetailsHeader from "./ExpertDetailsHeader";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import tickForButton from "../Common/tickForButton.svg";

import Button from "../Common/Button/Button";
import experts from "./experts.json";

// user is offered 3 dates, each is a string in format: 03/10/2021 12:00 AM

let d = new Date();
const arrayOf3DateTimes = [
  "03/10/2021 12:00 PM",
  "08/10/2021 10:00 AM",
  "05/12/2021 08:00 AM",
];

const expert = {
  firstName: "אליה",
  lastName: "לוי",
  profession: "רופא שיניים",
  city: "ירושלים",
  imageSrc:
    "https://thumbnail.imgbin.com/17/14/1/imgbin-user-ms-attendant-avatar-vRH5HKwaP0G2ABiJFCqhiGjT5_t.jpg",
  expertDetails: {
    meetingPlace: "zoom",
    lengthMeeting: "30 דקות",
  },
};
/* schema of user/expert :

const userSchema = new mongoose.Schema(
  {
    ...
    firstName: String,
    lastName: String,
    profession: String,
    city: String,
    imageSrc: String,
    ...
expertDetails: {
      isVerified: Boolean,
      helpKind: String,
      inquiryTags: [String],
      questionsBeforeMeeting: [String],
      lengthMeeting: Number,
      preferredMeetingType: { type: String, enum: ["physically", "virtual"] },
      meetingAddress: String,
    },
    */

const ChooseMeetingSchedule = () => {
  return (
    <div>
      <div className="pageTitle">בחירת מועד לפגישה</div>
      <div className="subTitle">{expert.expertDetails.lengthMeeting} פגישה</div>
      <ExpertDetailsHeader expert={expert} />
      {arrayOf3DateTimes.map((dateTime) => (
        <OneMeetingDetailsDisplay dateTime={dateTime} />
      ))}
      <div className="buttonDiv">
        <Button img={tickForButton}>אישור </Button>
      </div>
      <div
        className="footerText"
        onClick={() => {
          alert(
            "Stopping request process, set route to go back to login screen"
          );
        }}
      >
        תודה, כבר הסתדרתי
      </div>
    </div>
  );
};

export default ChooseMeetingSchedule;
