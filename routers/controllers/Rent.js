const RentModel= require("../../db/models/RentModel")

//all Rents 
const getRents = async (req,res)=>{
    try {
         const  Rent = await RentModel.find({});
        res.status(200).json(Rent)
    } catch (error){
        res.send(error)
    }
}
// one Rent
const getRent = async (req,res)=>{
    const {id} = req.params
    try {
         const  Rent = await RentModel.findOne({ _id:id})
         console.log(Rent);
        res.status(200).json( Rent)
    } catch (error){
        res.send(error)
    }
  }

 // add Rent
   const postRent=async(req,res)=>{
    const{name,price,img,location,space,city, mobileNumber, description}= req.body;
    const user =req.token.userId
    const newSale = new RentModel({name,price,img,location,space,city, mobileNumber, description ,user})
    try {
        const saved= await newSale.save()
        //  const Rent = await RentModel.find({}).populate("user")
        res.status(200).json(saved)
  
    } catch (error) {
        res.send(error)
    }
}

//delete Rent
const deletRent=async(req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  console.log("user : ",user);
  try {
    const a = await RentModel.findOne({_id: id})
    console.log("a" ,a);
    const del = await RentModel.findOneAndDelete({ _id: id, user: user });
    console.log("id : ",id);
    console.log("dal : ", del);
    if (del){
      console.log(del,"dddddddd");
      res.send("deleted")
    }else{
      res.send("cant deleted")
    }
  } catch (err) {
    res.send(err , "err");
  }
  };

  // update Rent
const updateRent = async (req , res) => {
  const id = req.params.id;
  const{name,  price,   img,  location,  space,  city, mobileNumber, description}= req.body;
  try {
    const updateBuy = await RentModel.findOneAndUpdate( { _id: id },
   { name,  price,   img,  location,  space,  city, mobileNumber, description }, { new: true });
    res.status(201).json(updateBuy);
  } catch (error) {
    res.send({ message: error });
  }
};


// delete Rent (Admin)
const deletRentAdmin=async(req,res)=>{
  const id = req.params.id;
  console.log(id);
  try {
    const del = await RentModel.findOneAndDelete({ _id: id });
    if (del ){
      res.send("deleted")
    }else{
      res.send("cant deleted")
    }
  } catch (err) {
    res.send(err , "err");
  }    
};
module.exports = { getRents ,postRent,getRent ,deletRent,updateRent ,deletRentAdmin};
