const express = require("express");
const signUpRoute = express.Router();
//
const {authentication} = require("../middlewares/authentication")

const { addUser,getUser,deletUser,putUser ,get1User} = require("../controllers/signUp");

signUpRoute.post("/signUp", addUser);
signUpRoute.get("/users",authentication, getUser);

signUpRoute.get("/user/:id",authentication, get1User);

signUpRoute.delete("/user/:id",authentication ,deletUser)
signUpRoute.put("/user/:id",authentication,putUser);



module.exports = signUpRoute;
