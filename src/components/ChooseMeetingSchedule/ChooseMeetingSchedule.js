import React, { useState } from "react";
import OneMeetingDetailsDisplay from "./OneMeetingDetailsDisplay";
import ExpertDetailsHeader from "./ExpertDetailsHeader";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import tickForButton from "../Common/tickForButton.svg";
import Button from "../Common/Button/Button";
import { getSpecificUser, putInquiry } from "../../contexts/actions";
// import experts from "./experts.json";
let d = new Date();

const expert = {
  firstName: "משה ",
  lastName: "ארביב",
  profession: "רואה חשבון",
  city: "ירושלים",
  imageSrc:
    "https://thumbnail.imgbin.com/17/14/1/imgbin-user-ms-attendant-avatar-vRH5HKwaP0G2ABiJFCqhiGjT5_t.jpg",
  expertDetails: {
    meetingPlace: "zoom",
    lengthMeeting: "30 דקות",
  },
};
const ChooseMeetingSchedule = ({ inquiry }) => {
  const [theExpert, setTheExpert] = useState();
  const [chosenDate, setChosenDate] = useState();
  const { optionalDates, lengthMeeting, meetingType, _id } =
    inquiry.meetingOptions;
  let putToServer = () => {
    let inquiryId = inquiry._id;
    let request = {
      meetingOptions: { scheduledDate: chosenDate },
      status: "meetingScheduled",
    };
    let response = putInquiry(inquiryId, request);
  };

  // useState(async () => {
  //   let { expertId } = inquiry.movedToExpert;
  //   let response = await getSpecificUser(expertId);
  //   let data = await response.json();
  //   setTheExpert(data);
  // });
  // console.log("the expert", theExpert);
  // console.log("ssssssssssssss", inquiry);
  // console.log("chosen date", chosenDate);
  return (
    <div className="container">
      <div className="pageTitle">בחירת מועד לפגישה</div>
      <div className="subTitle"> {`פגישה למשך ${lengthMeeting} דקות`}</div>
      <ExpertDetailsHeader expert={expert} />
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
        <Button
          img={tickForButton}
          style={{ width: "120%" }}
          onClick={putToServer}
        >
          אישור
        </Button>
      </div>
      <div
        className="footerText"
        onClick={() => {
          alert(
            "Stopping request process, set route to go back to login screen"
          );
        }}
      >
        .תודה, כבר הסתדרתי
      </div>
    </div>
  );
};

export default ChooseMeetingSchedule;
