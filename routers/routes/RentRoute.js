const express = require("express");
const RentRoute = express.Router();
const { authentication } = require("../middlewares/authentication"); //To verify that the user is registered on the site (token)
const {
  getRents,
  postRent,
  getRent,
  deletRent,
  updateRent,
  deletRentAdmin,
  AddImg2,
} = require("../controllers/Rent");//Send the name of the function

//Users feature
RentRoute.get("/Rents", getRents); // Gat all Rents Aqar
RentRoute.get("/Rent/:id", getRent); // Gat one Rent Aqar
RentRoute.post("/Rent", authentication, postRent); // add Rent Aqar
RentRoute.post("/AddImgR/:id", authentication, AddImg2); // add extra Img Rent Aqar
RentRoute.delete("/Rent/:id", authentication, deletRent); //delete Rent Aqar
RentRoute.put("/Rent/:id", authentication, updateRent); // update Rent

// Admin feature
RentRoute.delete("/RentAdmin/:id", authentication, deletRentAdmin); //delete Rent (Admin)

module.exports = RentRoute;
