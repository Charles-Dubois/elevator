// dependencies
const express = require("express"),
  router = express.Router(),
  //model mongo DB
  Elevator = require("../models/elevatorModel");

router.get("/", (_req, res) => {
  res.send("hello from elevator");
});
module.exports = router;
