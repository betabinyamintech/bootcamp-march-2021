import "./InquiryMeetingScheduled.css";
import diaryImg from "../commonsSVG/diary.svg";
import zoomImg from "../commonsSVG/zoom.svg";
import ChooseMeetingSchedule from "../ChooseMeetingSchedule/ChooseMeetingSchedule";
import { useEffect, useState } from "react";
import loading from "../commonsSVG/loadingDots.gif";

const InquiryMeetingScheduled = ({ inquiry }) => {
  const expert = inquiry.movedToExpert.expertId;
  const { scheduledDate } = inquiry.meetingOptions;

  if (!expert) {
    return <img src={loading}></img>;
  } else
    return (
      <div className="InquiryMeetingScheduled">
        <div style={{ margin: "inherit" }}>
          <div>{`${expert.profession} ${expert.firstName} ${expert.lastName}`}</div>
          {/* <div className="inquiryTitle" style={{ margin: "0" }}>
          {inquiryContent}
        </div> */}
          <div className="timePassed">
            <span>
              {`${new Date(
                scheduledDate
              ).toLocaleDateString()}       ${new Date(scheduledDate)
                .toLocaleTimeString()
                .slice(0, 5)}`}
            </span>
            {/* <span>{hours} </span> */}
          </div>
          <span>הפגישה תתקיים ב:</span>
          {expert.expertDetails.prefferedMeetingType === "virtual" ? (
            <img src={zoomImg} alt="" />
          ) : (
            <div>{expert.expertDetails.meetingAddress} </div>
          )}
          {/* <div className="chooseTimeOnHome">
          <ChooseMeetingSchedule />
        </div> */}
        </div>
      </div>
    );
};
export default InquiryMeetingScheduled;
