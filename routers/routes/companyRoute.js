const express = require("express");
const companyRoute = express.Router();

//
const {authentication} = require("../middlewares/authentication")
//
const { getcompanys ,getcompany,postcompany,deletcompany ,updatecompany,deletcompanyAdmin } = require("../controllers/company");



//
companyRoute.get("/companys", getcompanys); //all companys 
companyRoute.get("/company/:id", getcompany); // one company 11
companyRoute.post("/company",authentication, postcompany); // add company 
companyRoute.delete("/company/:id",authentication ,deletcompany) //delete company 
companyRoute.put("/company/:id",updatecompany); // update company 



// Admin
companyRoute.delete("/companyAdmin/:id",authentication ,deletcompanyAdmin) //delete buy (Admin)


//
module.exports = companyRoute;
