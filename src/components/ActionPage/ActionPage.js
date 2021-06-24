import React, { useContext } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useUserState } from "../../contexts/context";
import AdminChooseMentor from "../AdminChooseMentor/AdminChooseMentor";
import ChooseMeetingSchedule from "../ChooseMeetingSchedule/ChooseMeetingSchedule";
import InquiryMeetingScheduled from "../InquiryMeetingScheduled/InquiryMeetingScheduled";
import MeetingArrangment from "../MeetingArrangment/MeetingArrangment";
import MentorCardGroup from "../MentorCardGroup/MentorCardGroup";
import "./ActionPage.css";
const ActionPage = ({
  inquiry,
  expertsFoundForInquiry,
  setButton,
  buttonValue,
  buttonText,
}) => {
  const user = useUserState();
  const expertsUsers = useUserState();
  console.log("user state", user);
  const { isAdmin, isExpert } = user;
  const { inquiryId: _id, status } = inquiry;

  //   console.log("localStatus", status);
  //   console.log("expert founds for iqnuiry", expertsFoundForInquiry);
  console.log("all experts by actionPage", expertsUsers);

  return (
    <Popup
      trigger={
        <button onclick={setButton}>
          {!buttonValue ? "סגירה" : buttonText}
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div
          className="modal"
          onClick={() => {
            console.log(
              "experts arrived to action page",
              expertsFoundForInquiry
            );
          }}
        >
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> {inquiry.inquiryTitle} </div>

          <div className="content">
            {status === "movedToExpert" && isExpert && (
              <MeetingArrangment inquiry={inquiry} closePop={close} />
            )}
            {status === "matchesFound" && expertsFoundForInquiry && (
              <MentorCardGroup
                inquiry={inquiry}
                expertsFoundForInquiry={expertsFoundForInquiry}
              />
            )}
            {status === "opened" && expertsUsers ? (
              <AdminChooseMentor
                inquiry={inquiry}
                expertsUsers={expertsUsers}
              />
            ) : (
              <span>no</span>
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
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              סגירה
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};
export default ActionPage;
