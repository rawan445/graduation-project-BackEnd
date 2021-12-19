const express = require("express");
const AqarRoute = express.Router();
//
const {authentication} = require("../middlewares/authentication")
//
const { getAqars ,postAqars,deletAqars,getAqar } = require("../controllers/Aqar");



//
AqarRoute.get("/Aqars", getAqars);
AqarRoute.post("/Aqars",authentication, postAqars);
AqarRoute.delete("/Aqar/:id",authentication ,deletAqars)
AqarRoute.get("/Aqar/:id",authentication, getAqar);

//
module.exports = AqarRoute;
