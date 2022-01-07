const userModel= require("../../db/models/userModel")
const companyModel= require("../../db/models/companyModel")

// all companys
const getcompanys = async (req,res)=>{
    try {
        const  company = await companyModel.find({});
        res.status(200).json( company)
      } catch (error){
        res.send(error)     
    }
}

// one company
const getcompany = async (req,res)=>{
  const {id} = req.params
  try {
       const  company = await companyModel.findOne({ _id:id}) //.populate("user")
      res.status(200).json(company)
  } catch (error){
      res.send(error)
  }
}

// add company
const postcompany=async(req,res)=>{
    const{  name ,logo,city,description,location,mobileNumber, nameAqar}= req.body;
    const user =req.token.userId
    const newcompany = new companyModel({ name ,logo,city,description,location,mobileNumber, nameAqar ,user})
    try {
        const saved= await newcompany.save()
        res.status(200).json(saved)
  
    } catch (error) {
        res.send(error)
    }
}

//delete company
const deletcompany=async(req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const a = await companyModel.findOne({_id: id})
    const del = await companyModel.findOneAndDelete({ _id: id, user: user });
    if (del ){
      res.send("deleted")
    }else{
      res.send("cant deleted")
    }
  } catch (err) {
    res.send(err , "err");
  }
  };

// update company 
const updatecompany = async (req , res) => {
    const id = req.params.id;
    const{ name ,logo,city,description,location,mobileNumber, nameAqar}= req.body;
    try {
      const updatecompany = await companyModel.findOneAndUpdate( { _id: id},
     {  name ,logo,city,description,location,mobileNumber, nameAqar }, { new: true });
      res.status(201).json(updatecompany);
    } catch (error) {
      res.send({ message: error });
    }
  };

    //delete company (Admin)
    const deletcompanyAdmin=async(req,res)=>{
      const id = req.params.id;
    try {
      const check = await companyModel.findOne({})
      const del = await companyModel.findOneAndDelete({ _id: id });
  
      if(check.role == 1){
  
      if (del){
        console.log(del,"dddddddd");
        res.send(" (Admin) deleted")
      }else{
        res.send(" is not Admin cant deleted")
      }}else{
        res.send("error")
        console.log("is not Admin");
      }
    } catch (err) {
      res.send(err , "err");
    }
    };

module.exports = {  getcompanys ,getcompany,postcompany,deletcompany ,updatecompany,deletcompanyAdmin};
