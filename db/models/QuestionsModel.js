const mongoose = require("mongoose");

const QuestionsModel = new mongoose.Schema({

  Questions:{type: String },
  answer:[{type: String }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },

});

module.exports = mongoose.model("QuestionsModel", QuestionsModel );
