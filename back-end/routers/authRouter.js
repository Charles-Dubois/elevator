// dependencies
const express = require("express"),
  router = express.Router(),
  jwt = require("jsonwebtoken"),
  bcrypt = require("bcrypt"),
  // env
  { SECRET } = process.env,
  //model mongo DB
  Admin = require("../models/adminModel");

router.post("/register", async (req, res) => {
  let result;
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);
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
  res.cookie("justifytext", token, { httpOnly: true, secure: false });

  res
    .status(201)
    .json({ message: "Request success", description: "Account created" });
});

module.exports = router;
