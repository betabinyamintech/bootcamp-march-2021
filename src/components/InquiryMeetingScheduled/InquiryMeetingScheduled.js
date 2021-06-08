import "./InquiryMeetingScheduled.css";
import diaryImg from "../commonsSVG/diary.svg";
import zoomImg from "../commonsSVG/zoom.svg";
import ChooseMeetingSchedule from "../ChooseMeetingSchedule/ChooseMeetingSchedule";

const InquiryMeetingScheduled = ({ inquiry }) => {
  console.log(inquiry);
  const expert = 'רו"ח משה ארביב';
  const { inquiryTitle, inquiryContent } = inquiry;
  const date = "15/03/2021";
  const hours = "12:30-13:30";
  const meetingType = "virtual"; //      physically
  const address = "בנימין טק, שער בנימין";
  return (
    <div className="InquiryMeetingScheduled">
      <div style={{ margin: "inherit" }}>
        <div>{expert}</div>
        {/* <div className="inquiryTitle" style={{ margin: "0" }}>
          {inquiryContent}
        </div> */}
        <div className="timePassed">
          <span>{date} </span>
          <span>{hours} </span>
        </div>
        {meetingType === "virtual" ? (
          <img src={zoomImg} alt="" />
        ) : (
          <div>{address}</div>
        )}
        {/* <div className="chooseTimeOnHome">
          <ChooseMeetingSchedule />
        </div> */}
      </div>
    </div>
  );
};
export default InquiryMeetingScheduled;
