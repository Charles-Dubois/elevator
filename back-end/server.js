require("dotenv").config();
const express = require("express"),
  mongoose = require("mongoose"),
  app = express(),
  { MONGODB_URI } = process.env,
  PORT = process.env.PORT || 8000;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(console.log("connected to mongo"))
  .catch((err) => console.log(err));

app.get("/", (_req, res) => {
  res.send("hello world");
});

app.get("*", (_req, res) => {
  res.status(404).send("Error 404");
});
app.listen(PORT, () => {
  console.log("Listen on port " + PORT);
});
