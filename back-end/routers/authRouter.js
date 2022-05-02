// dependencies
const express = require("express"),
  router = express.Router(),
  jwt = require("jsonwebtoken"),
  bcrypt = require("bcrypt"),
  // env
  { SECRET } = process.env,
  //model mongo DB
  Admin = require("../models/adminModel"),
  //middlewares
  { validAuth } = require("../middlewares/validJoi");

// @desc Create an account, in case of success connect the user
// @route 	POST /admin/register
// @access 	Public
router.post("/register", validAuth, async (req, res) => {
  let result;
  try {
    //hash password
    req.body.password = await bcrypt.hash(req.body.password, 12);
    // stock in DB
    result = await Admin.create(req.body);
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: "Error 400 bad request",
      description: "An account with this email already exists",
    });
  }

  //generate token
  const token = jwt.sign(
    {
      data: "jwt",
      id: result._id,
    },
    SECRET
  );

  //add token in cookie
  res.cookie("elevator-api", token, { httpOnly: true, secure: false });

  res
    .status(201)
    .json({ message: "Request success", description: "Account created" });
});

// @desc Connection, creation of a cookie
// @route 	POST /admin/login
// @access 	Public

router.post("/login", validAuth, async (req, res) => {
  let result, ckeckPassword;
  try {
    // find the email in the db
    result = await Admin.find({ email: req.body.email });
    result = result[0];
    // check the password in the body with this in the DB hashed
    ckeckPassword = await bcrypt.compare(req.body.password, result.password);
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: "Error 400 bad request",
      description: "Email or password not valid",
    });
  }
  if (!ckeckPassword) {
    return res.status(400).json({
      message: "Error 400 bad request",
      description: "Email or password not valid",
    });
  }

  //generate token
  const token = jwt.sign(
    {
      data: "jwt",
      id: result._id,
    },
    SECRET
  );

  //add token in cookie
  res.cookie("elevator-api", token, { httpOnly: true, secure: false });

  res.json({ message: "Request success", description: "Connected" });
});

// @desc Disconnect, delete the cookie
// @route 	POST /admin/register
// @access 	Private
router.delete("/logout", async (_req, res) => {
  try {
    res.clearCookie("elevator-api");
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error 400 bad request",
      description: "Cookie not found, check that you are connected",
    });
  }

  res.json({
    message: "Request success",
    description: "You've been diconnected",
  });
});

module.exports = router;
