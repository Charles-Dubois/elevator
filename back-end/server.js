// environnement
require("dotenv").config();
//dependencies
const express = require("express"),
  mongoose = require("mongoose"),
  app = express(),
  { MONGODB_URI } = process.env,
  // port to lisent
  PORT = process.env.PORT || 8000,
  // router
  authRouter = require("./routers/authRouter"),
  elevatorRouter = require("./routers/elevatorRouter");

// connection Mongo DB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(console.log("connected to mongo"))
  .catch((err) => console.log(err));

// middlewares
app.use(express.json());
// @desc Route acceuil API
// @route 	GET /
// @access 	Public
app.get("/", (_req, res) => {
  res.send("elevator API");
});
// routers path
app.use("/admin", authRouter);
app.use("/elevator", elevatorRouter);

// @desc Catch not found
// @route 	GET /
// @access 	Public
app.get("*", (_req, res) => {
  res.status(404).send("Error 404");
});

// listen the port
app.listen(PORT, () => {
  console.log("Listen on port " + PORT);
});
