var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const authenticateToken = require("./jwt");
const dotenv = require("dotenv");
dotenv.config();

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
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

const usersSchema = new mongoose.Schema({
  user_name: String,
  password: String,
});
const User = mongoose.model("User", usersSchema);

app.post("/login", async (req, res) => {
  const { user_name, password } = req.body;
  const user = await User.findOne({ user_name }).exec();
  const isValid = bcrypt.compareSync(password, user.hash);
  if (!isValid) throw Error("user not valid");
  res.send(user);
});
app.post("/register", async (req, res) => {
  const { user_name, password } = req.body;
  const hash = bcrypt.hashSync(password);
  const token = generateAccessToken({ user_name, hash });
  const user = await new User({ user_name, hash }).save();
  user.token = token;
  res.send(user);
});

module.exports = app;
