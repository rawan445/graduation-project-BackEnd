const express = require("express");
const app = express();
require("./db/db");
app.use(express.json());
const cors = require("cors");
app.use(cors());

///////////////////////////////



////////////////////
const Port = 5000;
app.listen(Port, () => {
  console.log("server run on 5000 port");
});
