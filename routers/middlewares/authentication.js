const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const valid = jwt.verify(token, "ABC");
    req.token = valid;
    next();
  } catch (error) {
    res.status(403);
    res.send(error);
  }
};

module.exports = { authentication };
