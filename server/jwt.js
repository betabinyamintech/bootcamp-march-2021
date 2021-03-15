const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  // Gather the jwt access token from the request header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401); // if there isn't any token
  console.log("token auto:" + token);
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log("user: ", user);
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next(); // pass the execution off to whatever request the client intended
  });
}

function generateAccessToken(user) {
  // expires after half and hour (1800 seconds = 30 minutes)
  console.log("user jwt:" + user.email);
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: "30000s" });
}

module.exports = { authenticateToken, generateAccessToken };
