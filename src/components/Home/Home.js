import "./Home.css";
import React, { useEffect, useState } from "react";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import InquiryFilter from "../CommunityManager/CommunityManager.js";
import Button from "../Common/Button/Button";
import { Link, useLocation } from "react-router-dom";
import { useUserDispatch, useUserState } from "../../contexts/context";
import { getInquiries } from "../../contexts/actions";

const Home = () => {
  const user = useUserState().user;
  const [userInquiries, setUserInquiries] = useState(null);

  const isAdmin = user.isAdmin;

  useEffect(() => {
    async function getData() {
      setUserInquiries(await getInquiries());
    }
    getData();
  }, []);

  if (userInquiries === null) {
    return <div>loading</div>;
  } else {
    const ownedInquries = userInquiries.filter(
      (inq) => inq.userId === user._id
    );

    return (
      <div style={{ display: "flex", flexFlow: "column nowrap" }}>
        <div>
          <Header />
        </div>
        <Link>
          <Button>is Admin</Button>
        </Link>
        {isAdmin && (
          <>
            <div className="inquiriesTitle">פניות מסוננות</div>
            <InquiryFilter />
          </>
        )}
        <>
          {user.isExpert && (
            <>
              <div className="inquiriesTitle">פניות נכנסות</div>
              <OpenInquiries inquiries={ownedInquries} />
            </>
          )}
          <div className="inquiriesTitle">פניות פתוחות</div>
          <OpenInquiries inquiries={ownedInquries} />
        </>
      </div>
    );
  }
};

export default Home;
