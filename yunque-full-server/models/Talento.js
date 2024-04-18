const { model, Schema } = require("mongoose");

const talentoSchema = new Schema({

  thumbnail: String,

  title: String,

  description: String,
},
{
  timestamps: true,
});

module.exports = model("Talento", talentoSchema);