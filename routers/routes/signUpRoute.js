const express = require("express");
const signUpRoute = express.Router();

const { addUser } = require("../controllers/signUp");

signUpRoute.post("/signUp", addUser);

module.exports = signUpRoute;
