const mongoose = require("mongoose");

const StoiesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  url: String
});

module.exports = mongoose.model("Stories", StoiesSchema);
