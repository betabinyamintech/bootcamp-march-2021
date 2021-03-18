import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField/InputField";
import HashtagList from "../HashtagComponent/HashtagScreen/HashtagList";
import "./ExpertProfileEdit.css";
import hashtagsFromServer from "../Common/Hashtags";

const ExpertProfileEdit = ({ setExpertDetails, expertDetails }) => {
  return (
    <div className="profile-edit-container">
      <div className="input-fieldss">
        <InputField
          // value={userDetails.aboutMe}
          label="כמה מילים על עצמך :"
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
        {[
          { label: "שאלה 1:", index: 0 },
          { label: "שאלה 2:", index: 1 },
        ].map((question) => (
          <InputField
            value={expertDetails.questionsBeforeMeeting[question.index]}
            label={question.label}
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
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.89062 2.96875C5.85938 1 8.21875 0.015625 10.9688 0.015625C13.75 0.015625 16.1094 1 18.0469 2.96875C20.0156 4.90625 21 7.25 21 10C21 12.75 20.0156 15.1094 18.0469 17.0781C16.1094 19.0156 13.75 19.9844 10.9688 19.9844C8.21875 19.9844 5.85938 19.0156 3.89062 17.0781C1.95313 15.1094 0.984375 12.75 0.984375 10C0.984375 7.25 1.95313 4.90625 3.89062 2.96875ZM5.34375 15.6719C6.90625 17.2344 8.78125 18.0156 10.9688 18.0156C13.1875 18.0156 15.0781 17.2344 16.6406 15.6719C18.2031 14.1094 18.9844 12.2188 18.9844 10C18.9844 7.78125 18.2031 5.89062 16.6406 4.32812C15.0781 2.76563 13.1875 1.98438 10.9688 1.98438C8.78125 1.98438 6.90625 2.76563 5.34375 4.32812C3.78125 5.89062 3 7.78125 3 10C3 12.2188 3.78125 14.1094 5.34375 15.6719ZM11.4844 4.98438V10.2344L15.9844 12.9062L15.2344 14.1719L9.98438 10.9844V4.98438H11.4844Z"
                fill="#606060"
              />
            </svg>
          </span>
        </div>
        <select
          className="meeting-kind"
          defaultValue="30"
          onChange={(e) =>
            setExpertDetails({
              ...expertDetails,
              lengthMeeting: e.target.value,
            })
          }
        >
          <option value={15}>00:15 </option>
          <option value={30}>00:30 </option>
          <option value={45}>00:45 </option>
          <option value={60}>01:00 </option>
        </select>
        <span className="titles">סוג פגישה מועדף</span>
        <select
          className="meeting-kind "
          onChange={(e) =>
            setExpertDetails({
              ...expertDetails,
              preferredMeetingType: e.target.value,
            })
          }
        >
          <option value="physically">פגישה פיזית</option>
          <option value="virtual">שיחת טלפון</option>
          <option value="virtual">שיחת וידאו בזום</option>
        </select>
        {expertDetails.preferredMeetingType === "physically" && (
          <InputField
            value={expertDetails.meetingAdress}
            label="כתובת לפגישה:"
            onChange={(e) =>
              setExpertDetails({
                ...expertDetails,
                meetingAdress: e.target.value,
              })
            }
          />
        )}
        {expertDetails.preferredMeetingType === "physically" && (
          <span className="beta-gift">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4449 7.75867V14.1462H2.22485V7.75867"
                stroke="#828282"
                stroke-width="1.27751"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.7226 4.56494H0.94751V7.75871H13.7226V4.56494Z"
                stroke="#828282"
                stroke-width="1.27751"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.33496 14.1462V4.56494"
                stroke="#828282"
                stroke-width="1.27751"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.33504 4.56486H4.46065C4.03713 4.56486 3.63096 4.39662 3.33149 4.09714C3.03201 3.79767 2.86377 3.3915 2.86377 2.96798C2.86377 2.54446 3.03201 2.13828 3.33149 1.83881C3.63096 1.53934 4.03713 1.37109 4.46065 1.37109C6.69629 1.37109 7.33504 4.56486 7.33504 4.56486Z"
                stroke="#828282"
                stroke-width="1.27751"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.33496 4.56486H10.2094C10.6329 4.56486 11.039 4.39662 11.3385 4.09714C11.638 3.79767 11.8062 3.3915 11.8062 2.96798C11.8062 2.54446 11.638 2.13828 11.3385 1.83881C11.039 1.53934 10.6329 1.37109 10.2094 1.37109C7.97371 1.37109 7.33496 4.56486 7.33496 4.56486Z"
                stroke="#828282"
                stroke-width="1.27751"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            תוכלו להיפגש בחינם בבנימין טק
          </span>
        )}
      </div>
    </div>
  );
};
export default ExpertProfileEdit;
