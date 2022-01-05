const express = require("express");
const QuestionsRoute = express.Router();

const { getquest, postquest} = require("../controllers/Question");

QuestionsRoute.get("/quest", getquest); // one buy
QuestionsRoute.post("/Bquestuy", postquest); // add buy

module.exports = QuestionsRoute;
