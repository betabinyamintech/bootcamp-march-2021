import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Profile from "../Profile/Profile";
import inquiries from './inquires.json'

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
