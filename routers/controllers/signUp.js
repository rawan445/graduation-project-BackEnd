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
  // try {
  //      const  Rent = await userModel.find({});
  //     res.status(200).json(Rent)
  // } catch (error){
  //     res.send(error)
  // }
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
module.exports = { addUser,getUser };
