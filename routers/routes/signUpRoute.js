const express = require("express");
const signUpRoute = express.Router();
//
const {authentication} = require("../middlewares/authentication")

const { addUser,getUser,deletUser,putUser } = require("../controllers/signUp");

signUpRoute.post("/signUp", addUser);
signUpRoute.get("/users",authentication, getUser);
signUpRoute.delete("/user/:id",authentication ,deletUser)
signUpRoute.put("/user/:id",putUser);



module.exports = signUpRoute;
