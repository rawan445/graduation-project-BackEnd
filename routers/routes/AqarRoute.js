const express = require("express");
const AqarRoute = express.Router();

const { getAqars ,postAqars } = require("../controllers/Aqar");

AqarRoute.get("/Aqars", getAqars);
AqarRoute.post("/Aqars", postAqars);

module.exports = AqarRoute;
