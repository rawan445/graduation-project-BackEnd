const express = require("express");
const signUpRoute = express.Router();
const { authentication } = require("../middlewares/authentication"); //To verify that the user is registered on the site (token)
const {
  addUser,
  getUser,
  deletUser,
  putUser,
  get1User,
} = require("../controllers/signUp");//Send the name of the function

// Admin feature
signUpRoute.get("/users", authentication, getUser); //  Get all users (Admin)
signUpRoute.get("/user/:id", authentication, get1User); //Get one user  (Admin)
signUpRoute.delete("/user/:id", authentication, deletUser); //delete user  (Admin)
signUpRoute.put("/user/:id", authentication, putUser); // update user  (Admin)

//Users feature
signUpRoute.post("/signUp", addUser); //add user

module.exports = signUpRoute;
