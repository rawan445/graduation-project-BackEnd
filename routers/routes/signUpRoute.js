const express = require("express");
const signUpRoute = express.Router();
//
const {authentication} = require("../middlewares/authentication")

const { addUser,getUser ,deletRent} = require("../controllers/signUp");

signUpRoute.post("/signUp", addUser);
signUpRoute.get("/users",authentication, getUser);
// signUpRoute.delete("/Rent/:id",authentication ,deletRent)



module.exports = signUpRoute;
