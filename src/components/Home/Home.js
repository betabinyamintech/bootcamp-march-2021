import "./Home.css";
import React, { useState } from "react";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import inquiries from "./inquiries.json";
import CommunityManager from "../CommunityManager/CommunityManager.js";
import Button from "../Common/Button/Button";
import { Link, useLocation } from "react-router-dom";
const Home = () => {
  const communityManager = true; //לפי הראוטר
  const relevantInquries = inquiries;
  const isAdmin = useLocation();
  console.log(isAdmin); //לפי הכפתור
  return (
    <div style={{ display: "flex", flexFlow: "column nowrap" }}>
      <div>
        <Header isCommunityManager={communityManager} />
      </div>
      {communityManager && (
        <Link>
          {" "}
          <Button> is Admin</Button>
        </Link>
      )}
      {communityManager && isAdmin ? (
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
