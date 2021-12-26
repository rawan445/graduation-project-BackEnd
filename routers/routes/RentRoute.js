const express = require("express");
const RentRoute = express.Router();
//
const {authentication} = require("../middlewares/authentication")
//
const { getRents ,postRent,getRent ,deletRent ,updateRent} = require("../controllers/Rent");

//
RentRoute.get("/Rents", getRents);
RentRoute.post("/Rent",authentication, postRent);
RentRoute.get("/Rent/:id",authentication, getRent);
RentRoute.delete("/Rent/:id",authentication ,deletRent)
RentRoute.put("/Rent/:id",updateRent);

//
module.exports = RentRoute;
