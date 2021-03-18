import React from "react";
import "./ChooseMeetingSchedule.css";
import Avatar from "../Avatar/Avatar";
import Zoom from "../Common/Zoom/Zoom";

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

const ExpertDetailsHeader = ({ expert }) => {
  return (
    <div className="expertDetails">
      <Avatar Avatar={expert.imageSrc} width="47px" height="47px" />
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
            {expert.expertDetails.meetingAddress === "zoom" ? (
              <Zoom />
            ) : (
              expert.expertDetails.meetingAddress
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertDetailsHeader;
