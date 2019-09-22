// * Imports * //
const express = require("express");
const router = express.Router();
// Model Import
const Stories = require("../models/Stories");

// * Get Requests * //

// Get Stories
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

// Get Specific Story by ID
router.get("/:storyId", async (req, res) => {
  try {
    const story = await Stories.findById(req.params.storyId);
    res.json(story);
  } catch (err) {
    res.json({ message: err });
  }
});

// * Post Requests * //

// Submits Story
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

// * Delete Requests * //

// Delete Story by ID
router.delete("/:storyId", async (req, res) => {
  try {
    const removedStory = await Stories.remove({ _id: req.params.storyId });
    res.json(removedStory);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
