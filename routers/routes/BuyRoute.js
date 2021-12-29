const express = require("express");
const BuyRoute = express.Router();
//
const {authentication} = require("../middlewares/authentication")
//
const { getBuys ,postBuy,deletBuy,getBuy ,updateBuy,deletBuyAdmin } = require("../controllers/Buy");



//
BuyRoute.get("/Buys", getBuys);
BuyRoute.post("/Buy",authentication, postBuy);

BuyRoute.delete("/Buy/:id",authentication ,deletBuy)
BuyRoute.delete("/BuyAdmin/:id",authentication ,deletBuyAdmin)

BuyRoute.get("/Buy/:id",authentication, getBuy);
BuyRoute.put("/Buy/:id",updateBuy);

//
module.exports = BuyRoute;
