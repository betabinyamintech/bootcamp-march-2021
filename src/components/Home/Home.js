import "./Home.css";
import React, { useState } from "react";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import inquiries from "./inquires.json";
import { useUserState } from "../../contexts/UserContext";
import { RedirectRoute } from "react-router-dom";

const Home = () => {
  const communityManager = true;
  const relevantInquries = inquiries;
  return (
    <div style={{ display: "flex", flexFlow: "column nowrap" }}>
      <div>
        <Header isCommunityManager={communityManager} />
      </div>
      {communityManager ? (
        <>
          <div className="inquiriesTitle">שאלות פתוחות</div>
          <select
            className="selectStatus"
            id="filterMeetings"
            name="filterMeetings"
          >
            <option value="">כל הסטטוסים</option>
            <option value="">ממתין לשיוך למומחים</option>
            <option value="">ממתין לבחירת מומחה</option>
            <option value="">נקבעה פגישה</option>
            <option value="">עבר מועד הפגישה</option>
          </select>
        </>
      ) : (
        <>
          <div className="inquiriesTitle">פניות נכנסות</div>
          <OpenInquiries inquiries={inquiries} />
          <div className="inquiriesTitle">פניות פתוחות</div>
        </>
      )}
      <OpenInquiries inquiries={relevantInquries} />
    </div>
  );
};

export default Home;
