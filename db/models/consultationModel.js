const mongoose = require("mongoose");

const consultation = new mongoose.Schema({
    consultation: { type: String },
    answer: { type: Array },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
});

module.exports = mongoose.model("consultation", consultation);
