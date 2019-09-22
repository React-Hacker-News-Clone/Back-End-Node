const express = require("express");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("We are home");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

app.listen(5000);
