// Imports
const express = require("express");
const router = express.Router();
const Stories = require("../models/Stories");

// Get Requests
router.get("/", (req, res) => {
  res.send("List of stories");
});

router.get("/specific", (req, res) => {
  res.send("Specific Story");
});

// Post Request
router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
