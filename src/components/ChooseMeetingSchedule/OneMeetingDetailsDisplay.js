import React from "react";
import moment from "moment";
import "moment/locale/fr";

const computeDayOfWeek = (date) => {};

const OneMeetingDetailsDisplay = (date, time) => {
  return (
    <div>
      <div>
        {" "}
        {date}, {computeDayOfWeek({ date })}
      </div>
      <div>{time}</div>
    </div>
  );
};

export default OneMeetingDetailsDisplay;
