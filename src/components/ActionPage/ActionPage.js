import React, { useContext } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useUserState } from "../../contexts/context";
import AdminChooseMentor from "../AdminChooseMentor/AdminChooseMentor";
import ChooseMeetingSchedule from "../ChooseMeetingSchedule/ChooseMeetingSchedule";
import SmallButton from "../Common/SmallButton/SmallButton";
import InquiryMeetingScheduled from "../InquiryMeetingScheduled/InquiryMeetingScheduled";
import MeetingArrangment from "../MeetingArrangment/MeetingArrangment";
import MentorCardGroup from "../MentorCardGroup/MentorCardGroup";
import xIcon from "../commonsSVG/x-icon.svg";
import "./ActionPage.css";
const ActionPage = ({
  inquiry,
  expertsFoundForInquiry,
  setButton,
  buttonValue,
  buttonText,
}) => {
  const { user } = useUserState();
  const expertsUsers = useUserState();
  const { isAdmin, isExpert } = user;
  const { inquiryId: _id, status } = inquiry;
  return (
    <Popup
      trigger={
        <SmallButton onclick={setButton} isIcon={true}>
          {buttonText ? buttonText : "buttonText"}
        </SmallButton>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            <img src={xIcon}></img>{" "}
          </button>
          {/* <div className="header"> {inquiry.inquiryTitle} </div> */}

          <div className="content">
            {status === "movedToExpert" && isExpert && (
              <MeetingArrangment inquiry={inquiry} closePop={close} />
            )}
            {status === "matchesFound" && (
              <MentorCardGroup inquiry={inquiry} buttonText={buttonText} />
            )}
            {status === "opened" && expertsUsers && (
              <AdminChooseMentor
                inquiry={inquiry}
                expertsUsers={expertsUsers}
              />
            )}
            {status === "responseFromExpert" && (
              <ChooseMeetingSchedule inquiry={inquiry} />
            )}
            {status === "meetingScheduled" && (
              <InquiryMeetingScheduled inquiry={inquiry} />
            )}
          </div>

          <div className="actions">
            {/* <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            nested
          ></Popup> */}
            {/* <button
              className="button"
            
            >
              סגירה
            </button> */}
          </div>
        </div>
      )}
    </Popup>
  );
};
export default ActionPage;
