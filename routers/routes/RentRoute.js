const express = require("express");
const RentRoute = express.Router();
//
const {authentication} = require("../middlewares/authentication")
//
const { getRents ,postRent,getRent } = require("../controllers/Rent");

//
RentRoute.get("/Rents", getRents);
RentRoute.post("/Rent",authentication, postRent);
RentRoute.get("/Rent/:id",authentication, getRent);

//
module.exports = RentRoute;
