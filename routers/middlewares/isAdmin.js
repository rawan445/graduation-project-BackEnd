const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const valid = jwt.verify(token, "ABC");
    req.token = valid;
    if(isAdmin){
      next();
    }else{
      res.send("not admin");

    }
 
  } catch (error) {
    res.status(403);
    res.send(error);
  }
};

module.exports = { isAdmin };
