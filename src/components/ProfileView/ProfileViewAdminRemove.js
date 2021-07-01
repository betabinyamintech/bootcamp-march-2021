import React from "react";
import ProfileView from "./ProfileView";
import Button from "../Common/Button/Button";

const ProfileViewAdminRemove = ({ user }) => {
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
      <Button style={{ backgroundColor: "#F8F8F8" }}>הסרה</Button>
    </div>
  );
};
export default ProfileViewAdminRemove;
