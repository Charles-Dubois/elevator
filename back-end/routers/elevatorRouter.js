// dependencies
const express = require("express"),
  router = express.Router(),
  //model mongo DB
  Elevator = require("../models/elevatorModel");

router.post("/", async (req, res) => {
  let result;
  try {
    result = await Elevator.create(req.body);
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: "Error 400 bad request",
      description: "ElevatorRouter.js POST",
    });
  }
  console.log(result);
  res.send("hello from elevator");
});
module.exports = router;
