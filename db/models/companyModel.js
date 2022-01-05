const mongoose = require("mongoose");


const comModel = new mongoose.Schema({
  name: { type: String , },
  logo: { type: String },
  city: { type: String  },
  description: { type: String  },
  location: { type: String },
  mobileNumber: { type: String },
  nameAqar: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },

  
});
module.exports = mongoose.model("comModel", comModel );
