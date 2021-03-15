require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const  connectDb  = require("./models");
connectDb();


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.get("/login/:user_name/:password", async (req, res) => {
  const { user_name, password } = req.params;
  const user = await User.findOne({ user_name, password }).exec();
  res.send(user ?? {});
});
app.get("/register/:user_name/:password", async (req, res) => {
  const { user_name, password } = req.params;
  const user = await new User({ user_name, password }).save();
  res.send(user ?? {});
});

app.listen(process.env.PORT, () => {
  console.log("Opened port succesfully at port " + process.env.PORT);
});

module.exports = app;
