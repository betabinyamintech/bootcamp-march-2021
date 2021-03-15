const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    isExpert: {
      type: Boolean,
      required: true,
    },
    expertDetails: {
      helpKind: String,
      inquirySubjects: [String],
      questionsBeforeMeeting: [String],
      lengthMeeting: Number,
      preferredMeetingType: { type: String, enum: ["physically", "virtual"] },
      meetingAddress: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
