const mongoose = require("mongoose");

const StoiesSchema = mongoose.Schema({
  title: String,
  url: String
});

module.exports = mongoose.model("Stories", StoiesSchema);
