const express = require("express");
const AqarRoute = express.Router();

const { geAqars, postAqars, deleteAqar } = require("../controllers/Aqar");
const {authentication} = require("../middlewares/authentication")

AqarRoute.get("/Aqars",authentication, geAqars);
AqarRoute.post("/Aqars",authentication, postAqars);
AqarRoute.delete("/Aqar:id",authentication, deleteAqar);

module.exports = AqarRoute;
