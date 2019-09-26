// Imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv/config");

// Set Limiter on Story Posts
const limiter = rateLimit({
  windowMs: 1440 * 60 * 1000, // 24 hours
  max: 6 // limit each IP to 3 requests per windowMs
});

// Set app to express
const app = express();

// Import Routes
const storiesRoutes = require("./routes/stories");

// MiddleWare
app.use(cors());
app.use(bodyParser.json());
app.use("/stories", storiesRoutes);
app.use("/stories", limiter);

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

var PORT = process.env.PORT || 5000;
console.log("PORT being used", PORT);
app.listen(PORT);
