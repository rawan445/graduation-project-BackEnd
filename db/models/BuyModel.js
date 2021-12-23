const mongoose = require("mongoose");

const BuyModel = new mongoose.Schema({
  name: { type: String },
  price: { type: String },
  img: { type: String },
  location: { type: String },
  space: { type: String },
  city: { type: String },
  mobileNumber: { type: String },
  description: { type: String },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
});

module.exports = mongoose.model("BuyModel", BuyModel);
