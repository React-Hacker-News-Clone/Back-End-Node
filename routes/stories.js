const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("List of stories");
});

router.get("/specific", (req, res) => {
  res.send("Specific Story");
});

module.exports = router;
