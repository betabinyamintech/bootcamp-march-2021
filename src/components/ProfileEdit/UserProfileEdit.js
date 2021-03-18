import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import "./UserProfileEdit.css";
import Avatar from "../Avatar/Avatar";
import ExpertProfileEdit from "./ExpertProfileEdit";
import Button from "../Common/Button/Button";
import InputField from "../Common/InputField/InputField";
import PreviousButton from "../Common/PreviousButton/PreviousButton";

const UserProfileEdit = () => {
  const [exportOn, setExpertOn] = useState(true);
  let history = useHistory();
  const [userDetails, setUserDetails] = useState({
    profileFullFields: false,
    imageSrc: null,
    firstName: null,
    lastName: null,
    phone: null,
    city: null,
    isExpert: false,
    isAdmin: false,
    profession: null,
    aboutMe: null,
    helpKind: null,
    inquiryTags: null,
    question1: null,
    question2: null,
    meetingLength: null,
    preferredMeetingType: "physically",
    meetingAdress: null,
  });

  const setUserDetailsField = (field, value) => {
    setUserDetails({ ...userDetails, [field]: value });
  };
  const expertFunc = () => {
    setExpertOn(!exportOn);
    setUserDetailsField("isExpert", exportOn);
  };
  // const prepareToPost = () => {
  //   userDetails.map((field) => {
  //     field !== null;
  //   });
  // };
  console.log(userDetails);
  return (
    <div className="profile-edit-container">
      <div style={{ alignSelf: "flex-start" }}>
        <PreviousButton linkTo="/more-menu" />
      </div>
      <div className="profile-details">
        <Avatar />
        <h4 className="user-name">
          {userDetails.firstName + " " + userDetails.lastName}
        </h4>
        <h6 className="user-city">{userDetails.city} </h6>
      </div>
      <div className="input-fields">
        <InputField
          value={userDetails.firstName}
          required={true}
          label="שם פרטי:"
          onChange={(e) =>
            setUserDetails({ ...userDetails, firstName: e.target.value })
          }
        />
        <InputField
          value={userDetails.lastName}
          required={true}
          label="שם משפחה:"
          onChange={(e) =>
            setUserDetails({ ...userDetails, lastName: e.target.value })
          }
        />
        <InputField
          max={10}
          value={userDetails.profession}
          label="מה המקצוע שלך?"
          onChange={(e) =>
            setUserDetails({ ...userDetails, profession: e.target.value })
          }
        />

        <InputField
          value={userDetails.phone}
          type="number"
          required={true}
          label="טלפון"
          onChange={(e) =>
            setUserDetails({ ...userDetails, phone: +e.target.value })
          }
        />

        <InputField
          value={userDetails.city}
          required={true}
          label="יישוב"
          onChange={(e) =>
            setUserDetails({ ...userDetails, city: e.target.value })
          }
        />

        <div className="mentor-switch">
          <label className="switch">
            <input type="checkbox" onChange={expertFunc} />
            <span className="slider round"></span>
          </label>
          <span>אשמח גם לסייע לאחרים</span>
        </div>
        {exportOn && (
          <ExpertProfileEdit
            setUserDetailsField={setUserDetailsField}
            userDetails={userDetails}
          />
        )}
        {/* <button className="save-button">שמירה</button> */}
        <Button
          className="save-button"
          onClick={() => console.log(userDetails)}
        >
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.21875 7.8125L11.3125 0.71875L12.2188 1.65625L4.21875 9.65625L0.5 5.9375L1.4375 5L4.21875 7.8125Z"
              fill="white"
            />
          </svg>
          שמירה
        </Button>
      </div>
    </div>
  );
};
export default UserProfileEdit;
