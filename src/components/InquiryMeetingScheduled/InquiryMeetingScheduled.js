import "./InquiryMeetingScheduled.css";
import diaryImg from "../commonsSVG/diary.svg";
import zoomImg from "../commonsSVG/zoom.svg";
import ChooseMeetingSchedule from "../ChooseMeetingSchedule/ChooseMeetingSchedule";
import { useEffect, useState } from "react";
import loading from "../commonsSVG/loadingDots.gif";
import { useUserState } from "../../contexts/context";
import Avatar from "../Avatar/Avatar";
const InquiryMeetingScheduled = ({ inquiry }) => {
  const user = useUserState();
  const { isExpert, _id } = user.user;
  const expert = inquiry.movedToExpert.expertId;
  const { userId, meetingOptions } = inquiry;
  const { scheduledDate, meetingType, meetingAddress, lengthMeeting } =
    meetingOptions;
  if (!expert) {
    return <img src={loading}></img>;
  } else
    return (
      <div className="InquiryMeetingScheduled">
        <div className="details">
          <Avatar
            style={{ height: "45px", width: "45px" }}
            avatar={expert.imageSrc}
          />
          {expert === _id ? (
            <div className="meetingPartnerDetails">{` ${userId.firstName} ${userId.lastName}  , ${userId.profession}`}</div>
          ) : (
            <div className="meetingPartnerDetails">
              {` ${expert.firstName} ${expert.lastName}  , ${expert.profession}`}
            </div>
          )}
          {/* <div className="inquiryTitle" style={{ margin: "0" }}>
          {inquiryContent}
        </div> */}
          <div>
            <span>
              ב:
              {`${new Date(
                scheduledDate
              ).toLocaleDateString()}    בשעה:  ${new Date(scheduledDate)
                .toLocaleTimeString()
                .slice(0, 5)}`}
            </span>
            {/* <span>{hours} </span> */}
          </div>
          <span>הפגישה תתקיים ב:</span>
          {meetingType === "virtual" ? (
            <img src={zoomImg} alt="" />
          ) : (
            <div>{meetingAddress} </div>
          )}
          {/* <div className="chooseTimeOnHome">
          <ChooseMeetingSchedule />
        </div> */}
        </div>
      </div>
    );
};
export default InquiryMeetingScheduled;
