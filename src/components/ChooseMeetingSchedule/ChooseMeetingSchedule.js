import React, { useEffect, useState } from "react";
import OneMeetingDetailsDisplay from "./OneMeetingDetailsDisplay";
import ExpertDetailsHeader from "./ExpertDetailsHeader";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import tickForButton from "../Common/tickForButton.svg";
import Button from "../Common/Button/Button";
import { getSpecificUser, putInquiry } from "../../contexts/actions";
import loading from "../commonsSVG/loadingDots.gif";

// import experts from "./experts.json";
let d = new Date();

const ChooseMeetingSchedule = ({ inquiry }) => {
  const [theExpert, setTheExpert] = useState(inquiry.movedToExpert.expertId);
  const [chosenDate, setChosenDate] = useState();
  const { optionalDates, lengthMeeting, meetingType } = inquiry.meetingOptions;
  const { expertId } = inquiry.movedToExpert;
  let putToServer = () => {
    let inquiryId = inquiry._id;
    let request = {
      meetingOptions: { scheduledDate: chosenDate },
      status: "meetingScheduled",
    };
    let response = putInquiry(inquiryId, request);
  };
  // useEffect(async () => {
  //   let response = await fetch(`http://localhost:5000/users/${expertId}`, {
  //     method: "GET",
  //   });
  //   let expert = await response.json();
  //   setTheExpert(expert);
  // let get = ()=>{}
  // let { expertId } = inquiry.movedToExpert;
  // let response = await getSpecificUser(expertId);
  // let data = await response.json();
  // setTheExpert(data);
  // }, []);
  // console.log("the expert", theExpert);
  // console.log("ssssssssssssss", inquiry);
  // console.log("chosen date", chosenDate);
  if (!theExpert) {
    return <img src={loading}></img>;
  } else
    return (
      <div className="container">
        <div className="pageTitle">בחירת מועד לפגישה</div>
        <div className="subTitle"> {`פגישה למשך ${lengthMeeting} דקות`}</div>
        <ExpertDetailsHeader expert={theExpert} />
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
