import React from "react";
import OneMeetingDetailsDisplay from "./OneMeetingDetailsDisplay";
import ExpertDetailsHeader from "./ExpertDetailsHeader";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import tickForButton from "../Common/tickForButton.svg";

import Button from "../Common/Button/Button";

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
  meetingPlace: "zoom",
  meetingTime: "30 דקות",
  Avatar:
    "https://thumbnail.imgbin.com/17/14/1/imgbin-user-ms-attendant-avatar-vRH5HKwaP0G2ABiJFCqhiGjT5_t.jpg",
};

const ChooseMeetingSchedule = () => {
  return (
    <div>
      <div className="pageTitle">בחירת מועד לפגישה</div>
      <div className="subTitle">{expert.meetingTime} פגישה</div>
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
