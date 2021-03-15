require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
const { authenticateToken, generateAccessToken } = require("./jwt");
const bcrypt = require("bcrypt");
var logger = require("morgan");
const {
  connectDb,
  models: { User },
} = require("./models");
connectDb();

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username }).exec();
//   const isValid = bcrypt.compareSync(password, user.hash);
//   if (!isValid) throw Error("user not valid");
//   res.send(user);
// });
// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   console.log("username, password: ", username, password);
//   const hash = bcrypt.hashSync(password, saltRounds, function (err, hash) {
//     // Store hash in your password DB.
//   });
app.post("/login", async (req, res) => {
  const { email, password} = req.body;
  const user = await User.findOne({ email,password }).exec();
  res.send(user);
});
app.post("/register", async (req, res) => {
  const { email, password,firstName,lastName,profession,phone,city,isExpert,expertDetails:{helpKind,inquirySubjects,questionsBeforeMeeting,lengthMeeting,preferredMeetingType,meetingAddress}} = req.body;
  console.log("email, password: ", email, password);
  const user = await new User({email, password,firstName,lastName,profession,phone,city,isExpert,expertDetails:{helpKind,inquirySubjects,questionsBeforeMeeting,lengthMeeting,preferredMeetingType,meetingAddress}}).save();
  res.send(user);
});

app.use(function (req, res, next) {
  next(createError(404));
});
app.listen(process.env.PORT, () => {
  console.log("Opened port succesfully at port " + process.env.PORT);
});

module.exports = app;
