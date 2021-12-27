const mongoose = require("mongoose");

const AqarCompaniesModel = new mongoose.Schema({
  name: { type: String },
  logo: { type: String },
  mobileNum: { type: String },
  city: { type: String },
  location: { type: String },
  description: { type: String },
  NumAqar:{type: String},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
});

module.exports = mongoose.model("AqarCompaniesModel", AqarCompaniesModel);
