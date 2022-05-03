// dependencies
const express = require("express"),
  router = express.Router(),
  //model mongo DB
  Elevator = require("../models/elevatorModel"),
  //middelewares
  checkToken = require("../middlewares/checkToken");

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

  res
    .status(201)
    .json({ message: "Resquest seccues", description: "data added to DB" });
});

router.get("/", checkToken, async (req, res) => {
  let result;

  try {
    result = await Elevator.find();
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: "Error 400 bad request",
      description: "ElevatorRouter.js GET",
    });
  }

  res.json({ result });
});
module.exports = router;
