// Imports
const express = require("express");
const router = express.Router();
const Stories = require("../models/Stories");

router.get("/", (req, res) => {
  res.send("List of stories");
});

router.get("/specific", (req, res) => {
  res.send("Specific Story");
});

module.exports = router;
