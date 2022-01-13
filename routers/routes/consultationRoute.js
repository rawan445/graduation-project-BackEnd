const express = require("express");
const consultationRoute = express.Router();
//
const {authentication} = require("../middlewares/authentication")
//
const { getconsultations ,getanswer,Addconsultations,Addanswer} = require("../controllers/consultation");



//
consultationRoute.get("/consultations", getconsultations); //all buys 
consultationRoute.get("/answer", getanswer); //all buys 

consultationRoute.post("/consultations", Addconsultations);
consultationRoute.post("/answer/:id", Addanswer);


module.exports = consultationRoute;
