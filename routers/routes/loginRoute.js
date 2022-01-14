const express = require("express");
const loginRoute = express.Router();

const { login } = require("../controllers/login");//Send the name of the function

loginRoute.post("/login", login); //  New registration on the site

module.exports = loginRoute;
