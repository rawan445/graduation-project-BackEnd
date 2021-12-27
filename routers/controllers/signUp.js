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
      if(check.isAdmin == true){
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


const deletUser=async(req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  console.log("user : ",user);
  try {
    const check = await userModel.findOne({})
    const a = await userModel.findOne({_id: id})
    console.log("a" ,a);
    const del = await userModel.findOneAndDelete({ _id: id, user: user });
    console.log("id : ",id);
    console.log("dal : ", del);
    if(check.isAdmin == true){

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
    const{ name, email,isAdmin }= req.body;
    try {
      const check = await userModel.findOne({})
      if(check.isAdmin == true){
      const updateBuy = await userModel.findOneAndUpdate( { _id: id },
     { name, email ,isAdmin }, { new: true });
      res.status(201).json(updateBuy);
    }else{
      res.send("error")
      console.log("is not Admin");

    }}catch (error) {
      res.send({ message: error });
    }
  };
module.exports = { addUser,getUser , deletUser ,putUser};
