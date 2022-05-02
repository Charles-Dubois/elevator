// dependencies
const mongoose = require("mongoose"),
  adminSchema = mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLenght: 6,
      maxLenght: 50,
    },
  });
const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
