import React from "react";
import "./ChooseMeetingSchedule.css";
import Avatar from "../Avatar/Avatar";

const ExpertDetailsHeader = ({ expert }) => {
  return (
    <div className="expertDetails">
      <Avatar />
      <div className="middlementordiv">
        <h2>
          {expert.firstName} {expert.lastName}
        </h2>
        <h5>
          {expert.profession},{expert.city}
        </h5>
        <div className="meetingPlace">
          נפגש בדרך כלל ב: {expert.meetingPlace}
        </div>
      </div>
    </div>
  );
};

export default ExpertDetailsHeader;
