const mongoose = require("mongoose");

const courseModel = new mongoose.Schema({
  Title: { type: String },
  Type: { type: String },
  img: { type: String },
  City:{ type: String },
  Location:{ type: String },
  space:{ type: String },
  contactNumber:{ type: Number },
  
});

module.exports = mongoose.model("courseModel", courseModel);
