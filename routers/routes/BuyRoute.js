const express = require("express");
const BuyRoute = express.Router();
const { authentication } = require("../middlewares/authentication"); //To verify that the user is registered on the site (token)
const {
  getBuys,
  postBuy,
  deletBuy,
  getBuy,
  updateBuy,
  deletBuyAdmin,
  AddImg,
} = require("../controllers/Buy");//Send the name of the function

//Users feature
BuyRoute.get("/Buys", getBuys); //Get all buys Aqar
BuyRoute.get("/Buy/:id", getBuy); // Get one buy Aqar
BuyRoute.post("/Buy", authentication, postBuy); // add buy Aqar
BuyRoute.post("/AddImg/:id", AddImg); //add extra Img Rent Aqar
BuyRoute.delete("/Buy/:id", authentication, deletBuy); //delete buy Aqar
BuyRoute.put("/Buy/:id", authentication, updateBuy); // update buy  Aqar

// Admin feature
BuyRoute.delete("/BuyAdmin/:id", authentication, deletBuyAdmin); //delete buy (Admin) Aqar

module.exports = BuyRoute;
