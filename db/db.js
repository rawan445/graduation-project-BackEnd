const mongoose = require("mongoose");

mongoose.connect(process.env.MOMGO_URL 
  // || "mongodb://localhost:27017/RealEstateDB"
   ).then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);
