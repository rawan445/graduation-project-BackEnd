const express = require("express");
const cors = require("cors");
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());
require("./db/db");

///////////////////////////////

const BuyRoute = require("./routers/routes/BuyRoute");
const RentRoute = require("./routers/routes/RentRoute");
const companyRoute = require("./routers/routes/companyRoute");
const signUpRoute = require("./routers/routes/signUpRoute");
const loginRoute  = require("./routers/routes/loginRoute")
const consultationRoute  = require("./routers/routes/consultationRoute")

app.use(BuyRoute);
app.use(RentRoute)
app.use(signUpRoute);
app.use(loginRoute);
app.use(companyRoute);
app.use(consultationRoute);




////////////////////
const Port = 5000;
app.listen(process.env.PORT || Port, () => {
  console.log("server run on 5000 port");
});