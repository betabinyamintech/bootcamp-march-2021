import "./Home.css";
import React from "react";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import inquiries from "./inquiries.json";

const Home = () => {
  const communityManager = false;
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
            <option value="opened">כל הפניות</option>
            <option value="missingDetails">פניות עם פרטים חסרים</option>
            <option value="matchesFound">התאמות נמצאו</option>
            <option value="movedToExpert">פניות שעברו למומחה</option>
            <option value="responseFromExpert">
              פניות שקיבלו תגובה ממומחה
            </option>
            <option value="meetingScheduled">פניות עם פגישה מתוזמנת</option>
            <option value="meetingWas">הייתה פגישה</option>
            <option value="irrelevant">פניות לא רלוונטיות</option>
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
