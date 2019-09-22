// Imports
const express = require("express");
const router = express.Router();
const Stories = require("../models/Stories");

// Get Requests
router.get("/", async (req, res) => {
  try {
    // Limit response to 20 stories
    const stories = await Stories.find().limit(20);
    res.json(stories);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/specific", (req, res) => {
  res.send("Specific Story");
});

// Post Request
router.post("/", async (req, res) => {
  const story = new Stories({
    title: req.body.title,
    story: req.body.story,
    url: req.body.url
  });

  // Save story to database
  const savedStory = await story.save();
  try {
    res.status(200).json(savedStory);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
