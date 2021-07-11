import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField/InputField";
import HashtagList from "../HashtagComponent/HashtagScreen/HashtagList";
import "./ExpertProfileEdit.css";
import hashtagsFromServer from "../Common/Hashtags";
import giftSVG from "../commonsSVG/gift.svg";
import clockIcon from "../commonsSVG/clock-icon.svg";
import informationIcon from "../commonsSVG/information-icon.svg";

const ExpertProfileEdit = ({ setExpertDetails, expertDetails, hashtags }) => {
  const [preferredMeetingType, setPreferredMeetingType] = useState(
    expertDetails.preferredMeetingType
      ? expertDetails.preferredMeetingType
      : "physically"
  );
  const localPreferredMeetingType = (value) => {
    setPreferredMeetingType(value);
    console.log(preferredMeetingType);
    setExpertDetails({
      ...expertDetails,
      preferredMeetingType: value,
    });
  };
  let keys = 0;
  const [question1, setQuestion1] = useState(
    expertDetails.questionsBeforeMeeting
      ? expertDetails.questionsBeforeMeeting[0]
      : ""
  );
  const [question2, setQuestion2] = useState(
    expertDetails.questionsBeforeMeeting
      ? expertDetails.questionsBeforeMeeting[1]
      : ""
  );
  const labelsForExpertQuestions = [
    { label: "שאלה 1:", index: 0 },
    { label: "שאלה 2:", index: 1 },
  ];
  let { questionsBeforeMeeting } = expertDetails;
  console.log(
    "selected hashtags by expert details page",
    expertDetails.inquiryTags
  );
  console.log("expert details", expertDetails);
  return (
    <div className="profile-edit-container">
      <div className="input-fields">
        <InputField
          value={expertDetails.aboutMe}
          label="כמה מילים על הרקע המקצועי שלך"
          onChange={(e) =>
            setExpertDetails({ ...expertDetails, aboutMe: e.target.value })
          }
        />
        <div className="input-div">
          <label>
            <InputField
              height="90px"
              label="באילו נושאים ותחומים מעניין אותך לסייע?"
              value={expertDetails.helpDescription}
              type="text"
              onChange={(e) =>
                setExpertDetails({
                  ...expertDetails,
                  helpDescription: e.target.value,
                })
              }
            ></InputField>
          </label>
        </div>
        <span className="titles">כאן אפשר לבחור האשטאגים מתאימים</span>
        <HashtagList
          hashtags={hashtags}
          selectedHashtags={expertDetails.inquiryTags}
          setSelectedHashtags={(value) =>
            setExpertDetails({
              ...expertDetails,
              inquiryTags: value,
            })
          }
        />

        <div className="input-div">
          <label>
            <InputField
              height="90px"
              label="לאיזה סוג אנשים אתה מעוניין לייעץ?  "
              value={expertDetails.peoplesKind}
              type="text"
              onChange={(e) =>
                setExpertDetails({
                  ...expertDetails,
                  peoplesKind: e.target.value,
                })
              }
            ></InputField>
          </label>
        </div>
        <div className="information-comment">
          <img src={informationIcon}></img>
          <span>שלב בקריירה, גודל עסק , רקע ספציפי</span>
        </div>
        <div className="input-div">
          <label>
            <InputField
              height="90px"
              label="כאן כדאי לשים קישור ללינקדאין / דף פייסבוק "
              value={expertDetails.link}
              type="text"
              onChange={(e) =>
                setExpertDetails({
                  ...expertDetails,
                  link: e.target.value,
                })
              }
            ></InputField>
          </label>
        </div>
        <div className="information-comment">
          <img src={informationIcon}></img>
          <span>נוכל לשלוח לפונה המתאים לפני הפגישה שלכם.</span>
        </div>

        <span className="titles">מידע שחשוב לך לקבל מהפונה לפני כל פגישה?</span>
        <div className="information-comment">
          <img src={informationIcon}></img>
          <span>
            מסמכים, מידע על העסק או המיזם <br /> הפניות שרלוונטיות לך במערכת ,
            מאפשרות לך לקבוע פגישה עם המשתמש שפנה כדי לענות על השאלה שלו. השאלות
            הבאות יעזרו לנו להפנות אליך את האנשים הנכונים ולגרום שהפגישות יהיו
            הכי יעילות.
          </span>
        </div>

        <InputField
          value={question1}
          label={"שאלה 1"}
          key={keys++}
          onChange={(e) => setQuestion1(e.target.value)}
          onBlur={() => {
            setExpertDetails({
              ...expertDetails,
              questionsBeforeMeeting: [question1, question2],
            });
          }}
        />
        <InputField
          value={question2}
          label={"שאלה 2"}
          key={keys++}
          onChange={(e) => {
            setQuestion2(e.target.value);
          }}
          onBlur={() => {
            setExpertDetails({
              ...expertDetails,
              questionsBeforeMeeting: [question1, question2],
            });
          }}
        />
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
          <option value="phoneCall">שיחת טלפון</option>
        </select>
        {preferredMeetingType === "physically" && (
          <InputField
            id="meetingAddress"
            value={
              expertDetails.meetingAddress ? expertDetails.meetingAddress : null
            }
            label="כתובת לפגישה:"
            onChange={(e) =>
              setExpertDetails({
                ...expertDetails,
                meetingAddress: e.target.value,
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
