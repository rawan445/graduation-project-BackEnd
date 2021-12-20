const express = require("express");
const app = express();
require("./db/db");
app.use(express.json());
const cors = require("cors");
app.use(cors());

///////////////////////////////

const BuyRoute = require("./routers/routes/BuyRoute");
const RentRoute = require("./routers/routes/RentRoute");

const signUpRoute = require("./routers/routes/signUpRoute");
const loginRoute  = require("./routers/routes/loginRoute")
app.use(BuyRoute);
app.use(RentRoute)
app.use(signUpRoute);
app.use(loginRoute);


////////////////////
const Port = 5000;
app.listen(Port, () => {
  console.log("server run on 5000 port");
});