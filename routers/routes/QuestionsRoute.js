const express = require("express");
const QuestionsRoute = express.Router();

const { postanswer ,postQuest ,getQuest ,getanswer} = require("../controllers/Question");

QuestionsRoute.post("/answer/:id", postanswer); // add buy
QuestionsRoute.get("/answer", getanswer); // add buy

QuestionsRoute.post("/Quest", postQuest); // add buy
QuestionsRoute.get("/Quest", getQuest); // add buy



module.exports = QuestionsRoute;
