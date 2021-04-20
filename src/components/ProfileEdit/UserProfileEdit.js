import React, { useCallback, useState } from "react";
import "./UserProfileEdit.css";
import Avatar from "../Avatar/Avatar";
import ExpertProfileEdit from "./ExpertProfileEdit";
import Button from "../Common/Button/Button";
import InputField from "../Common/InputField/InputField";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import { putUser } from "../../contexts/actions";
import { useUserDispatch, useUserState } from "../../contexts/context";

const UserProfileEdit = () => {
  const userState = useUserState();
  console.log("userState", userState);
  const userDispatch = useUserDispatch();
  const [userDetails, setUserDetails] = useState(userState.user);

  const setExpertDetails = useCallback(
    (expertDetails) => setUserDetails({ ...userDetails, expertDetails }),
    [userDetails, setUserDetails]
  );

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
          value={userDetails.firstName || ""}
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
            <input
              type="checkbox"
              value={userDetails.isExpert}
              onChange={(e) =>
                setUserDetails({ ...userDetails, isExpert: !e.target.value })
              }
            />
            <span className="slider round"></span>
          </label>
          <span>אשמח גם לסייע לאחרים</span>
        </div>
        {userDetails.isExpert && (
          <ExpertProfileEdit
            setExpertDetails={setExpertDetails}
            expertDetails={userDetails.expertDetails}
          />
        )}
        {/* <button className="save-button">שמירה</button> */}
        <Button
          className="save-button"
          onClick={() => {
            putUser(userDispatch, { ...userDetails, profileFullFields: true });
          }}
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
