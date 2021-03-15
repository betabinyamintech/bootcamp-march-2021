require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
// var path = require("path");
var logger = require("morgan");
const  {connectDb,models:{User}}  = require("./models");
connectDb();

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

app.get("/login/:user_name/:password", async (req, res) => {
  const { user_name, password } = req.params;
  const user = await User.findOne({ user_name, password }).exec();
  res.send(user ?? {});
});
app.get("/users", async (req, res) => {
  const users = await User.find({}).exec();
  res.send(users ?? {});
});

app.post("/register", async(req, res) => {
  const { username, password } = req.body;
const user= await new User({ username, password }).save();

  res.send(user);
});
app.post("/login", async(req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password }).exec();
  res.send(user ?? {});
});
// app.get("*", async (req, res) => {
//   console.log("123");
//   res.send('ok');

//   // const { user_name, password } = req.params;
//   // const user = await User.findOne({ user_name, password }).exec();
//   // res.send(user ?? {});
// });

app.use(function (req, res, next) {
  next(createError(404));
});
app.listen(process.env.PORT, () => {
  console.log("Opened port succesfully at port " + process.env.PORT);
});

module.exports = app;
