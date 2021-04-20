import PreviousButton from "../Common/PreviousButton/PreviousButton";
import StatusIcon from "../Common/RequestStatusWindow/StatusIcon/StatusIcon";
import StageStatuses from "../Common/RequestStatusWindow/StageStatuses";
import "./MeetingScheduled.css";
import Button from "../Common/Button/Button";
import inquiries from "../Home/inquiries.json";
import Avatar from "../Avatar/Avatar";

const MeetingScheduled = () => {
  const {
    user: { firstName, lastName, city, phone, imageSrc },
    inquiryTitle,
    meetingOptions: { lengthMeeting, meetingAddress, scheduledDate },
  } = inquiries[0];
  const addToCalendar = () => {};
  return (
    <div className="meetingScheduled">
      <div className="preBtnMeetingScheudled">
        <PreviousButton linkTo="more-menu" />
      </div>
      <div className="statusMtngScdl">
        <StatusIcon status={StageStatuses.FINISHED} />
        <div className="statusMtngScdlMessage">
          מעולה, נקבעה פגישה עם {firstName}
        </div>
      </div>
      <div className="meetingScdlDetails">
        <div className="dateTimePlaceMeetingDetails">
          <div className="mtngScdlDate">{scheduledDate}</div>
          <div className="mtngScdlTime">משך הפגישה {lengthMeeting} דקות</div>
          <div className="mtngScdlAddress">{meetingAddress}</div>
        </div>
        <div className="mtngScdlConcatInfoTitle">פרטי יצירת קשר:</div>
        <div className="mtngScdlConcatInfo">
          <div>
            <Avatar src={imageSrc} />
          </div>
          <div className="mtngScdlConcatInfoText">
            <div>{firstName + " " + lastName + ", " + city}</div>
            <div>{phone}</div>
          </div>
        </div>
        <div className="mtngScdlInquiryTitleTitle">נושא הפנייה:</div>
        <div className="mtngScdlInquiryTitle">{inquiryTitle}</div>
      </div>
      <div className="addToCalendarButtonDiv">
        <Button
          className="addToCalendarButton"
          style={{ width: "100%" }}
          onClick={addToCalendar}
        >
          הוספה ליומן
        </Button>
      </div>
    </div>
  );
};
/* { inquiry: { meeting } } */

export default MeetingScheduled;
