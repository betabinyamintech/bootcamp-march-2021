import React, { useEffect, useState } from "react";
import OneMeetingDetailsDisplay from "./OneMeetingDetailsDisplay";
import ExpertDetailsHeader from "./ExpertDetailsHeader";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import tickForButton from "../Common/tickForButton.svg";
import Button from "../Common/Button/Button";
import { getSpecificUser, putInquiry, Reload } from "../../contexts/actions";
import loading from "../commonsSVG/loadingDots.gif";
import { useHistory } from "react-router";
import EditInquiry from "../EditInquiry/EditInquiry";
import BrightButton from "../Common/BrightButton/BrightButton";
// import experts from "./experts.json";
let d = new Date();

const ChooseMeetingSchedule = ({ inquiry }) => {
  const history = useHistory();
  const [theExpert, setTheExpert] = useState(inquiry.movedToExpert.expertId);
  const [chosenDate, setChosenDate] = useState();
  const { optionalDates, lengthMeeting, meetingType, meetingAddress } =
    inquiry.meetingOptions;
  const { expertId } = inquiry.movedToExpert;
  let putToServer = () => {
    let inquiryId = inquiry._id;
    let request = {
      meetingOptions: {
        scheduledDate: chosenDate,
        meetingType,
        lengthMeeting,
        meetingAddress,
      },
      status: "meetingScheduled",
    };
    let response = putInquiry(inquiryId, request);
    Reload();
  };

  if (!theExpert) {
    return <img src={loading}></img>;
  } else
    return (
      <div className="container">
        <div className="pageTitle">בחירת מועד לפגישה</div>
        <div className="subTitle"> {`פגישה למשך ${lengthMeeting} דקות`}</div>
        <ExpertDetailsHeader
          expert={theExpert}
          meetingType={inquiry.meetingOptions.meetingType}
        />
        {optionalDates.map((dateTime) => (
          <OneMeetingDetailsDisplay
            dateTime={dateTime}
            chosenDate={chosenDate}
            setChosenDate={(date) => {
              setChosenDate(date);
            }}
          />
        ))}
        <div className="buttonDiv">
          <Button onClick={putToServer}>אישור</Button>
        </div>
        <BrightButton className="footerText">.תודה, כבר הסתדרתי</BrightButton>
      </div>
    );
};

export default ChooseMeetingSchedule;
