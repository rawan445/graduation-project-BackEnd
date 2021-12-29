const bcrypt = require("bcrypt");
const userModel  = require("../../db/models/userModel")
////////////////
const addUser = async(req, res) => {
  let { name, email, password } = req.body; 
  try {
      password = await bcrypt.hash(password,10); 
      const newUser = new userModel({ name , email , password });
      const response = await newUser.save();
      res.status(201).json(response);
  }
   catch (error) {
      res.send(error)
  }
};
const getUser = async (req,res)=>{
  try {
      const check = await userModel.findOne({})
    // console.log(check,"hhhhhhhhhhhhhh");
      if(check.role == 1){
        const  Buy = await userModel.find({});
        res.status(200).json( Buy)
        console.log("is Admin");
      }else{
        res.send("error")
        console.log("is not Admin");

      }
      } catch (error){
        res.send(error)
        console.log("xxxxx");

        
    }
}
const get1User= async (req,res)=>{
  const {id} = req.params
  try {
       const  Buy = await userModel.findOne({ _id:id})
       console.log(Buy);
      res.status(200).json( Buy)
      console.log("ffffffffffff",Buy);
  } catch (error){
      res.send(error)
      console.log("nnnnnnnnnnnnnnnnnn");
  }
}
const deletUser=async(req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  console.log("user : ",user);
  try {
    const check = await userModel.findOne({})
    const a = await userModel.findOne({_id: id})
    console.log("a" ,a);
    const del = await userModel.findOneAndDelete({ _id: id, user: user });

    if(check.role == 1){

    if (del){
      console.log(del,"dddddddd");
      res.send("deleted")
    }else{
      res.send("cant deleted")
    }}else{
      res.send("error")
      console.log("is not Admin");

    }
  } catch (err) {
    res.send(err , "err");
  }
  };

  const putUser = async (req , res) => {
    const id = req.params.id;
    const{ name, email,role }= req.body;
    try {
      const check = await userModel.findOne({})
      if(check.role == 1){
      const updateBuy = await userModel.findOneAndUpdate( { _id: id },
     { name, email ,role }, { new: true });
      res.status(201).json(updateBuy);
    }else{
      res.send("error")
      console.log("is not Admin");

    }}catch (error) {
      res.send({ message: error });
    }
  };
module.exports = { addUser,getUser , deletUser ,putUser,get1User};
