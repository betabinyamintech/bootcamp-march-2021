import React from "react";
import Profile from "../Profile/Profile";

const Home = () => {
  return (
    <div>
      <Profile />

      <label className="receivedInquiries">פניות נכנסות</label>
      <ReceivedInquiries />

      <label className="openInquiries">פניות פתוחות</label>
      <OpenInquiries />

      <button className="lastInquiriesButton">הצגת פניות קודמות</button>
      <button className="lastChallengesButton">הצג אתגרים קודמים</button>
    </div>
  );
};

export default Home;
