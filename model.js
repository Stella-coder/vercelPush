const mongoose = require("mongoose");
const schema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  class: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model("class", schema);
