import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField/InputField";
import HashtagList from "../HashtagComponent/HashtagScreen/HashtagList";
import "./ExpertProfileEdit.css";
import hashtagsFromServer from "../Common/Hashtags";
import giftSVG from "../commonsSVG/gift.svg";
import clockIcon from "../commonsSVG/clock-icon.svg";

const ExpertProfileEdit = ({ setExpertDetails, expertDetails }) => {
  const [preferredMeetingType, setPreferredMeetingType] =
    useState("physically");
  const localPreferredMeetingType = (value) => {
    setPreferredMeetingType(value);
    setExpertDetails({
      ...expertDetails,
      preferredMeetingType: value,
    });
  };
  let keys = 0;
  const labelsForExpertQuestions = [
    { label: "שאלה 1:", index: 0 },
    { label: "שאלה 2:", index: 1 },
  ];
  return (
    <div className="profile-edit-container">
      <div className="input-fieldss">
        <InputField
          value={expertDetails.aboutMe}
          label="כמה מילים על עצמך:"
          onChange={(e) =>
            setExpertDetails({ ...expertDetails, aboutMe: e.target.value })
          }
        />

        <div className="input-div">
          <label>
            <textarea
              value={expertDetails.helpDescription}
              placeholder=" "
              type="text"
              onChange={(e) =>
                setExpertDetails({
                  ...expertDetails,
                  helpDescription: e.target.value,
                })
              }
            ></textarea>
            <span>בכמה מילים, במה בדיוק תוכל לסייע?</span>
          </label>
        </div>
        <span className="titles"> באילו נושאים תוכל לסייע?</span>
        <HashtagList
          hashtags={hashtagsFromServer}
          selectedHashtags={expertDetails.inquiryTags}
          setSelectedHashtags={() =>
            setExpertDetails({
              ...expertDetails,
              inquiryTags: expertDetails.inquiryTags,
            })
          }
        />
        <span className="titles">מה חשוב לך לדעת לפני הפגישה?</span>

        {labelsForExpertQuestions.map((question) => (
          <InputField
            value={
              expertDetails.questionsBeforeMeeting
                ? expertDetails.questionsBeforeMeeting[question.index]
                : ""
            }
            label={question.label}
            key={keys++}
            onChange={(e) =>
              setExpertDetails((e) => {
                const { questionsBeforeMeeting } = expertDetails;
                questionsBeforeMeeting[question.index] = e.target.value;
                return { ...expertDetails, questionsBeforeMeeting };
              })
            }
          />
        ))}
        <span className="titles"> קבע את פרטי הפגישה: </span>
        <div className="titles">
          <span>אורך הפגישה </span>
          <span style={{ alignSelf: "flex-start" }}>
            <img src={clockIcon}></img>
          </span>
        </div>
        <select
          className="meeting-kind"
          value={
            expertDetails.lengthMeeting ? expertDetails.lengthMeeting : "30"
          }
          onChange={(e) =>
            setExpertDetails({
              ...expertDetails,
              lengthMeeting: e.target.value,
            })
          }
        >
          <option value={15}>רבע שעה</option>
          <option value={30}>חצי שעה </option>
          <option value={45}>45 דקות </option>
          <option value={60}>שעה </option>
        </select>
        <span className="titles">סוג פגישה מועדף</span>
        <select
          value={
            expertDetails.preferredMeetingType
              ? expertDetails.preferredMeetingType
              : "physically"
          }
          className="meeting-kind "
          onChange={(e) => localPreferredMeetingType(e.target.value)}
        >
          <option value="physically">פגישה פיזית</option>
          <option value="virtual">שיחת וידאו בזום</option>
        </select>
        {preferredMeetingType === "physically" && (
          <InputField
            value={
              expertDetails.meetingAdress ? expertDetails.meetingAdress : null
            }
            label="כתובת לפגישה:"
            onChange={(e) =>
              setExpertDetails({
                ...expertDetails,
                meetingAdress: e.target.value,
              })
            }
          />
        )}
        {preferredMeetingType === "physically" && (
          <span className="beta-gift">
            <img src={giftSVG}></img>
            תוכלו להיפגש בחינם בבנימין טק
          </span>
        )}
      </div>
    </div>
  );
};
export default ExpertProfileEdit;
