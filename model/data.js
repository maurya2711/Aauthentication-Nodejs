const mongooose = require("mongoose");
const dataSchema = new mongooose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  genre: [{ type: String }],
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongooose.model("Data", dataSchema);
