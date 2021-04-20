import MentorCard from "../MentorCard/MentorCard";

const MentorCardGroup = ({ selectedMentors }) => {
  return (
    <div className="cardGroup">
      {selectedMentors.map((mentor) => (
        <MentorCard user={mentor} />
      ))}
    </div>
  );
};

export default MentorCardGroup;
