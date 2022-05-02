// dependencies
const mongoose = require("mongoose"),
  elevatorModel = mongoose.Schema({
    call: {
      type: String,
      required: true,
      maxLenght: 20,
      minLenght: 4,
    },
    from: {
      type: Number,
      required: true,
    },
    to: {
      type: Number,
      required: true,
    },
  });
const Elevator = mongoose.model("elevator", elevatorModel);

module.exports = Elevator;
