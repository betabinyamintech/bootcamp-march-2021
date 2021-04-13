import "./CommunityManager.css";

const InquiryFilter = ({ inquiry }) => {
  return (
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
        <option value="responseFromExpert">פניות שקיבלו תגובה ממומחה</option>
        <option value="meetingScheduled">פניות עם פגישה מתוזמנת</option>
        <option value="meetingWas">הייתה פגישה</option>
        <option value="irrelevant">פניות לא רלוונטיות</option>
      </select>
    </>
  );
};

export default InquiryFilter;
