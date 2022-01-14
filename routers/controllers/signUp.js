const bcrypt = require("bcrypt");
const userModel = require("../../db/models/userModel");

//add user && Log in to the site
const addUser = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    password = await bcrypt.hash(password, 10);
    const newUser = new userModel({ name, email, password });
    const response = await newUser.save();
    res.status(201).json(response);
  } catch (error) {
    res.send(error);
  }
};

// Get all users (Admin)
const getUser = async (req, res) => {
  try {
    const user = await userModel.find({});
    res.status(200).json(user);
  } catch (error) {
    res.send(error);
  }
};
//Get one user  (Admin)
const get1User = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findOne({ _id: id });
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.send(error);
  }
};

//delete user  (Admin)
const deletUser = async (req, res) => {
  const id = req.params.id;
  const user = req.token.userId;
  // console.log("user : ",user);
  try {
    const a = await userModel.findOne({ _id: user });
    // console.log("a", a);
    if (a.role == 1) {
      const del = await userModel.findOneAndDelete({ _id: id });
      if (del) {
        console.log(del, "dddddddd");
        res.status(203).json(" (Admin) deleted");
      } 
    } 
  } catch (err) {
    res.send(err, "err");
  }
};
// update user  (Admin)
const putUser = async (req, res) => {
  const id = req.params.id;
  const { name, email, role } = req.body;
  try {
    const updateBuy = await userModel.findOneAndUpdate(
      { _id: id },
      { name, email, role },
      { new: true }
    );
    res.status(201).json(updateBuy);
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = { addUser, getUser, deletUser, putUser, get1User };
