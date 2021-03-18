import React from "react";
import "./ChooseMeetingSchedule.css";
import Avatar from "../Avatar/Avatar";
import Zoom from "../Common/Zoom/Zoom";

const ExpertDetailsHeader = ({ expert }) => {
  return (
    <div className="expertDetails">
      <Avatar Avatar={expert.Avatar} width="47px" height="47px" />
      <div className="expertDetailsText">
        <div className="middlementordiv">
          <div className="boxTitleHeading">
            {expert.firstName} {expert.lastName}
          </div>
          <div className="subDetails">
            {expert.profession},{expert.city}
          </div>
          <div className="meetingPlace">
            נפגש בדרך כלל ב:{" "}
            {expert.meetingPlace === "zoom" ? <Zoom /> : expert.meetingPlace}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertDetailsHeader;
