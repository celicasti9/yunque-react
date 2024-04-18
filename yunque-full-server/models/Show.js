const { model, Schema } = require("mongoose");

const showSchema = new Schema({

  thumbnail: String,

  title: String,

  schedule: String,

  description: String,
},
{
  timestamps: true,
});

module.exports = model("Show", showSchema);