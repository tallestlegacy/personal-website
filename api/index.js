const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.send({ msg: "Hello from the other side as well" });
});

module.exports = app;
