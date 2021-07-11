import { useState } from "react";
import "./CommunityManager.css";

import { InquiryType } from "../InquiryForAdmin/InquiryForAdmin.js";
const allInquiryTypesExpert = InquiryType.admin;
// console.log("all typs", allInquiryTypesExpert);

const groupByForObject = (xs, key) =>
  Object.values(xs).reduce((rv, x) => {
    rv[x[[key]]] = true || [];
    return rv;
  }, {});

const InquiryFilter = ({
  allInquiries,
  filteredInquiries,
  setFilteredInquiries,
  setChosenStatus,
}) => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  // console.log(allInquiries);

  const searchStatus = (statusChoice) => {
    const data = allInquiries.filter((i) => i.statusMessage === statusChoice);
    if (statusChoice === "") {
      setFilteredInquiries(allInquiries);
      setSelectedStatus("כל הפניות");
    } else {
      setFilteredInquiries(data);
      setSelectedStatus(statusChoice);
      setChosenStatus(statusChoice);
    }
  };
  return (
    <>
      <div className="inquiriesTitle">פניות מסוננות: {selectedStatus}</div>
      <select
        style={{ marginBottom: "50px" }}
        className="status-filter"
        id="filterMeetings"
        name="filterMeetings"
        value={selectedStatus}
        onChange={(e) => searchStatus(e.target.value)}
      >
        <option value="all">כל הפניות</option>
        {Object.keys(groupByForObject(allInquiryTypesExpert, "type")).map(
          (category) => (
            <option value={category} key={category}>
              {category}
            </option>
          )
        )}
      </select>
    </>
  );
};

export default InquiryFilter;

/*
        this code will only give list of status codes in the dropDown (e.g. matchesFound)
        without giving the Hebrew text:

          {Object.values(InquiryStatus).map(
          (category) => (
            <option value={category} key={category}>
              {category}
            </option>
          )
        )}

        */
