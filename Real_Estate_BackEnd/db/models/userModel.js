const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String ,unique:true },
  password: { type: String },
  // role: { type: String, default: "user", enum: ["user", "admin"]},
  // isAdmin:{Boolean},

});

module.exports = mongoose.model("userModel", userModel);
