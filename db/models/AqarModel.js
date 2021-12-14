const mongoose = require("mongoose");

const AqarModel = new mongoose.Schema({
  TitleAqar: { type: String },
  TypeAqar: { type: String },
  imgAqar: { type: String },
  LocationAqar:{ type: String },
  spaceAqar:{ type: String },
  City:{ type: String },
  NumberAqar:{ type: String },
  
});

module.exports = mongoose.model("AqarModel", AqarModel);
