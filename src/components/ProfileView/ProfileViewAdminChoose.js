import React from "react";
import ProfileView from "./ProfileView";
import Button from "../Common/Button/Button";
import tick from "../Common/tickForButton.svg";

const ProfileViewAdminChoose = ({ user }) => {
  return (
    <div>
      <ProfileView />
      <div className="row-details">
        <span className="row-title"> טלפון </span>
        <span className="row-description"> 050-4458384 </span>
      </div>
      <div className="row-details">
        <span className="row-title"> מייל </span>
        <span className="row-description"> adflja@akldfj.asd </span>
      </div>
      <Button>
        בחירה <img src={tick} alt="tick" />
      </Button>
    </div>
  );
};
export default ProfileViewAdminChoose;
