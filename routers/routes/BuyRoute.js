const express = require("express");
const BuyRoute = express.Router();
//
const {authentication} = require("../middlewares/authentication")
//
const { getBuys ,postBuy,deletBuy,getBuy ,updateBuy,deletBuyAdmin } = require("../controllers/Buy");



//
BuyRoute.get("/Buys", getBuys); //all buys 
BuyRoute.get("/Buy/:id",authentication, getBuy); // one buy
BuyRoute.post("/Buy",authentication, postBuy); // add buy
BuyRoute.delete("/Buy/:id",authentication ,deletBuy) //delete buy
BuyRoute.put("/Buy/:id",updateBuy); // update buy 



// Admin
BuyRoute.delete("/BuyAdmin/:id",authentication ,deletBuyAdmin) //delete buy (Admin)


//
module.exports = BuyRoute;
