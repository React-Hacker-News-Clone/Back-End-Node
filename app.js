// Imports
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

// Import Routes
const storiesRoutes = require("./routes/stories");

// MiddleWare
app.use("/stories", storiesRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("We are home");
});

// Connect To DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

app.listen(5000);
