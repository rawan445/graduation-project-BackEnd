const express = require("express");
const RentRoute = express.Router();
//
const {authentication} = require("../middlewares/authentication")
//
const { getRents ,postRent,getRent ,deletRent ,updateRent ,deletRentAdmin} = require("../controllers/Rent");

//
RentRoute.get("/Rents", getRents);//all Rents 
RentRoute.get("/Rent/:id",authentication, getRent);// one Rent
RentRoute.post("/Rent",authentication, postRent); // add Rent
RentRoute.delete("/Rent/:id",authentication ,deletRent)//delete Rent
RentRoute.put("/Rent/:id",updateRent); // update Rent
//

RentRoute.delete("/RentAdmin/:id",authentication ,deletRentAdmin) //delete Rent (Admin)

module.exports = RentRoute;
