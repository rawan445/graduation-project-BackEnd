const bcrypt = require("bcrypt");
const userModel  = require("../../db/models/userModel")
////////////////

 //add user
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

//all users (Admin)
const getUser = async (req,res)=>{
  try {
      const check = await userModel.findOne({})
      console.log("check :",check);
        const  Buy = await userModel.find({});
        res.status(200).json( Buy)
        console.log("is Admin");
    
      } catch (error){
        res.send(error)
        console.log("xxxxx");

        
    }
}
 //one user  (Admin)
const get1User= async (req,res)=>{
  const {id} = req.params
  try {
       const  Buy = await userModel.findOne({ _id:id})
       console.log(Buy);
      res.status(200).json( Buy)
  } catch (error){
      res.send(error)
  }
}

//delete user  (Admin)
const deletUser=async(req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  // console.log("user : ",user);
  try {
    const a = await userModel.findOne({_id: user})
    console.log("a" ,a);
    if(a.role == 1){
      const del = await userModel.findOneAndDelete({ _id: id });
    if (del){
      console.log(del,"dddddddd");
      res.status(203).json(" (Admin) deleted")
    }else{
      res.send("can't find")
    }}else{
      res.send("error")
      console.log("is not Admin");

    }
  } catch (err) {
    res.send(err , "err");
  }
  };
// update user  (Admin)
  const putUser = async (req , res) => {
    const id = req.params.id;
    const{ name, email,role }= req.body;
    try {
      const updateBuy = await userModel.findOneAndUpdate( { _id: id },
     { name, email ,role }, { new: true });
      res.status(201).json(updateBuy);
   
  }catch (error) {
      res.send({ message: error });
    }
  };


//   Questions
// answer
module.exports = { addUser,getUser , deletUser ,putUser,get1User };
