import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Profile from "../Profile/Profile";
import inquiries from "./inquires.json";

const Home = () => {
  return (
    <div>
      <Profile name="אפרת" numExperts="5" />

      <label className="receivedInquiries">פניות נכנסות</label>
<<<<<<< HEAD
      <OpenInquiries inquiries = {inquiries}/>
=======
      <OpenInquiries inquiries={inquiries} />
>>>>>>> e480d38026f7f3eee65dca3d0739454067f703c6

      <label className="openInquiries">פניות פתוחות</label>
      <OpenInquiries inquiries={inquiries} />

      <button className="lastInquiriesButton">הצגת פניות קודמות</button>
      <button className="lastChallengesButton">הצג אתגרים קודמים</button>
    </div>
  );
};

export default Home;
