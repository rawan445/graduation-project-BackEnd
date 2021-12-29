const express = require("express");
const signUpRoute = express.Router();
//
const {authentication} = require("../middlewares/authentication")

const { addUser,getUser,deletUser,putUser ,get1User} = require("../controllers/signUp");

// Admin
signUpRoute.get("/user/:id",authentication, get1User);//all users (Admin)
signUpRoute.get("/users",authentication, getUser); //one user  (Admin)
signUpRoute.delete("/user/:id",authentication ,deletUser)//delete user  (Admin)
signUpRoute.put("/user/:id",authentication,putUser); // update user  (Admin)

//
signUpRoute.post("/signUp", addUser); //add user

module.exports = signUpRoute;
