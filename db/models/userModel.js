const Joi = require("joi");
const mongoose = require("mongoose");


const userModel = new mongoose.Schema({
  name: { type: String , required:true ,
    // minlength:3, maxlength:44
   },
  email: { type: String ,unique:true , required:true 
    // ,minlength:3, maxlength:255 
   },
  password: { type: String , required:true 
    // ,minlength:8, maxlength:1024
   },
  isAdmin:{type:Boolean , default:false}
});

// function userValidate(user){

//   const schema={
//     name:Joi.string().min(3).max(44).required(),
//     email:Joi.string().min(3).max(255).required(),
//     password:Joi.string().min(8).max(1024).required(),
//   }
//   return Joi.validate(user,schema)
// }
// exports.userValidate=userValidate
module.exports = mongoose.model("userModel", userModel );
