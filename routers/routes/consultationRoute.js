const express = require("express");
const consultationRoute = express.Router();
const { authentication } = require("../middlewares/authentication"); //To verify that the user is registered on the site (token)
const {
  getconsultations,
  Addconsultations,
  Addanswer,
} = require("../controllers/consultation");//Send the name of the function

//Users feature
consultationRoute.get("/consultations", getconsultations); // Get consultations

consultationRoute.post("/consultations", authentication, Addconsultations); //add consultations
consultationRoute.post("/answer/:id", authentication, Addanswer); //add answer

// // Admin feature
// RentRoute.delete("//:id",a)

module.exports = consultationRoute;
