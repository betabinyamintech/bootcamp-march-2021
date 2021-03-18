import "./Home.css";
import React from "react";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import inquiries from "./inquiries.json";
import CommunityManager from "../CommunityManager/CommunityManager.js";

const Home = () => {
  const communityManager = true;
  const relevantInquries = inquiries;
  return (
    <div style={{ display: "flex", flexFlow: "column nowrap" }}>
      <div>
        <Header isCommunityManager={communityManager} />
      </div>
      {communityManager ? (
        <CommunityManager />
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
