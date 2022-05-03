// dependencies
const jwt = require("jsonwebtoken");
//env
const { SECRET } = process.env;

// check the token
function checkToken(req, res, next) {
  try {
    jwt.verify(req.cookies.elevatorapi, SECRET);
  } catch (err) {
    console.error(err);
    return res.json({ message: "Please login again" });
  }

  next();
}
module.exports = checkToken;
