import React from "react";

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
      ][monthNum];
};

const getDayOfMonth = (dateString) => {
  let tempArray = dateString.split("/");
  return tempArray[0];
};

const getTime = (dateString) => {
  let tempArray = dateString.split(" ");
  let hour = +tempArray[1].split(":")[0] + (tempArray[2] === "AM" ? 0 : 12);
  let min = tempArray[1].split(":")[1];

  return hour + ":" + min;
};

const OneMeetingDetailsDisplay = ({ dateTime }) => {
  return (
    <div className="outerbox">
      <div className="daytimebox">
        <div>
          {getDayOfMonth(dateTime)} {getMonth(dateTime)},{" "}
          {computeDayOfWeek(dateTime)}
        </div>
        <div>{getTime(dateTime)}</div>
      </div>
    </div>
  );
};

export default OneMeetingDetailsDisplay;
