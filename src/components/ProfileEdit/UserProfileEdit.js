import React, { useState } from "react";
import "./UserProfileEdit.css";
// import Avatar from "../Avatar/Avatar";
import ExpertProfileEdit from "./ExpertProfileEdit";
import Button from "../Common/Button/Button";
import InputField from "../Common/InputField/InputField";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import { useHistory } from "react-router-dom";

const UserProfileEdit = () => {
  const [exportOn, setExportOn] = useState(false);
  let history = useHistory();
  const [userDetails, setUserDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    profession: "",
    phone: "",
    city: "",
    isExpert: false,
    hashtags: null,
    helpDescription: "",
    expertQuestions: { question1: "", question2: "" },
    meetingLength: "",
    preferredMeetingType: "",
    meetingAdress: "",
  });

  const setUserDetailsField = (field, value) => {
    setUserDetails({ ...userDetails, [field]: value });
  };
  console.log(userDetails);
  return (
    <div className="profile-edit-container">
      <div style={{ alignSelf: "flex-start" }}>
        <PreviousButton linkTo="/more-menu" />
      </div>
      <div className="profile-details">
        {/* <Avatar /> */}
        <h4 className="user-name">ישראל ישראלי</h4>
        <h6 className="user-city"> כוכב השחר</h6>
      </div>
      <div className="input-fields">
        <InputField
          required={true}
          label="שם פרטי:"
          onChange={(e) =>
            setUserDetails({ ...userDetails, firstName: e.target.value })
          }
        />

        <InputField
          required={true}
          label="שם משפחה:"
          onChange={(e) =>
            setUserDetails({ ...userDetails, lastName: e.target.value })
          }
        />

        <InputField
          required={true}
          label="טלפון"
          onChange={(e) =>
            setUserDetails({ ...userDetails, phone: e.target.value })
          }
        />

        <InputField
          required={true}
          label="מייל"
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />

        <InputField
          required={true}
          label="יישוב"
          onChange={(e) =>
            setUserDetails({ ...userDetails, city: e.target.value })
          }
        />

        <div className="mentor-switch">
          <label className="switch">
            <input type="checkbox" onChange={() => setExportOn(!exportOn)} />
            <span className="slider round"></span>
          </label>
          <span>אשמח גם לסייע לאחרים</span>
        </div>
        {exportOn && (
          <ExpertProfileEdit setUserDetailsField={setUserDetailsField} />
        )}
        {/* <button className="save-button">שמירה</button> */}
        <Button className="save-button" onClick={() => history.push("/home")}>
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
