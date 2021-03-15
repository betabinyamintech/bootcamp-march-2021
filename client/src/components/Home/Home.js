import "./Home.css";
import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import inquiries from "./inquires.json";

const Home = () => {
  return (
    <div style={{ display: "flex", flexFlow: "column nowrap" }}>
      <div>
        <Header />
      </div>

      <div className="receivedInquiries">פניות נכנסות</div>
      <OpenInquiries inquiries={inquiries} />

      <div className="openInquiries">פניות פתוחות</div>
      <OpenInquiries inquiries={inquiries} />

      <button className="lastInquiriesButton">הצגת פניות קודמות</button>
      <button className="lastChallengesButton">הצג אתגרים קודמים</button>
    </div>
  );
};

export default Home;
