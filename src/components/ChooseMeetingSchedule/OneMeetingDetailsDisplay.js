import React from "react";
import { useState } from "react";

// date is supplied as a string in the form 03/10/2021 12:00 PM
const computeDayOfWeek = (dateString) => {
  const dayOfWeek = new Date(dateString).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        "יום ראשון",
        "יום שני",
        "יום שלישי",
        "יום רביעי",
        "יום חמישי",
        "יום ששי",
        "שבת",
      ][dayOfWeek];
};

const getMonth = (dateString) => {
  let tempArray = dateString.split("/");
  const monthNum = tempArray[1];

  return isNaN(monthNum)
    ? null
    : [
        "בינואר",
        "בפברואר",
        "במרץ",
        "באפריל",
        "במאי",
        "ביוני",
        "ביולי",
        "באוגוסט",
        "בספטמבר",
        "באוקטובר",
        "בנובמבר",
        "בדצמבר",
      ][+monthNum - 1];
};
const OneMeetingDetailsDisplay = ({ dateTime, setChosenDate, chosenDate }) => {
  let date = new Date(dateTime);
  let meetingDate = date.toLocaleDateString();
  let meetingTime = date.toLocaleTimeString();
  let finalDate = `${computeDayOfWeek(
    dateTime
  )} ,${meetingTime},${meetingDate}`;
  const [checked, setChecked] = useState();
  return (
    <div
      className={
        chosenDate && chosenDate.includes(dateTime)
          ? "outerboxChoosed"
          : "outerbox"
      }
      onClick={() => {
        setChosenDate(dateTime);
      }}
    >
      <div className="daytimebox">
        <div>{finalDate}</div>
      </div>
    </div>
  );
};

export default OneMeetingDetailsDisplay;
