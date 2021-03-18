import React from "react";
import OneMeetingDetailsDisplay from "./OneMeetingDetailsDisplay";
import ExpertDetailsHeader from "./ExpertDetailsHeader";

// user is offered 3 dates, each is a string in format: 03/10/2021 12:00 AM

let d = new Date();
const arrayOf3DateTimes = [
  "03/10/2021 12:00 PM",
  "04/10/2021 10:00 AM",
  "05/12/2021 08:00 AM",
];

const expert = {
  firstName: "אליה",
  lastName: "לוי",
  profession: "רופא שיניים",
  city: "ירושלים",
  meetingPlace: "שער בנימין",
  meetingTime: "30 דקות",
};

const ChooseMeetingSchedule = () => {
  return (
    <div>
      <h1>בחירת מועד לפגישה</h1>
      <h2>{expert.meetingTime} פגישה</h2>
      <ExpertDetailsHeader expert={expert} />
      {arrayOf3DateTimes.map((dateTime) => (
        <OneMeetingDetailsDisplay dateTime={dateTime} />
      ))}
    </div>
  );
};

/* {arrayOf3DateTimes.map(({ date, time }) => (
        <OneMeetingDetailsDisplay date={date} time={time} />
      ))} */
/* 
   {hashtagsWithState.map(({ title, active }) => (
        <Hashtag
          onClick={() => {
*/

export default ChooseMeetingSchedule;
