import React from "react";
import ProfileView from "./ProfileView";
import Button from "../Common/Button";

const ProfileViewAdminDelete = ({ user }) => {
  return (
    <div>
      <ProfileView />
      <Button style={{ backgroundColor: "#F8F8F8" }}>הסרה</Button>
    </div>
  );
};
export default ProfileViewAdminDelete;
