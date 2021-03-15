import "./Home.css";
import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
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
      </div>
  )
}


export default Home;