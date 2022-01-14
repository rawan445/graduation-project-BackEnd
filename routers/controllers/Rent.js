const RentModel= require("../../db/models/RentModel")

//Get all Rents Aqar
const getRents = async (req,res)=>{
    try {
         const  Rent = await RentModel.find({});
        res.status(200).json(Rent)
    } catch (error){
        res.send(error)
    }
}
// Get one Rent Aqar
const getRent = async (req,res)=>{
    const {id} = req.params
    try {
         const  Rent = await RentModel.findOne({ _id:id})
        //  console.log(Rent);
        res.status(200).json( Rent)
    } catch (error){
        res.send(error)
    }
  }

 // add Rent Aqar
   const postRent=async(req,res)=>{
    const{name,  price,   img,  location,  space,  city, mobileNumber, description ,bedRooms,LivingRoom ,bathRoom , roleA, propertyAge}= req.body;
    const user =req.token.userId
    const newSale = new RentModel({name,  price,   img,  location,  space,  city, mobileNumber, description ,bedRooms,LivingRoom ,bathRoom , roleA, propertyAge ,user})
    try {
        const saved= await newSale.save()
        res.status(200).json(saved)
  
    } catch (error) {
        res.send(error)
    }
}

//delete Rent Aqar
const deletRent=async(req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  console.log("user : ",user);
  try {
    const a = await RentModel.findOne({_id: id})
    // console.log("a" ,a);
    const del = await RentModel.findOneAndDelete({ _id: id, user: user });
    // console.log("id : ",id);
    // console.log("dal : ", del);
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

  // update Rent Aqar
const updateRent = async (req , res) => {
  const id = req.params.id;
  const{name,  price,   img,  location,  space,  city, mobileNumber, description,bedRooms,LivingRoom ,bathRoom , roleA, propertyAge}= req.body;
  try {
    const updateBuy = await RentModel.findOneAndUpdate( { _id: id },
      { name,  price,   img,  location,  space,  city, mobileNumber, description ,bedRooms,LivingRoom ,bathRoom , roleA, propertyAge}, { new: true });
      res.status(201).json(updateBuy);
  } catch (error) {
    res.send({ message: error });
  }
};


// delete Rent Aqar (Admin)
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
//add extra Img Rent Aqar
const AddImg2 = async (req, res) => {
  const { id } = req.params;
  const { img} = req.body;
  console.log("id",id ,"img", img);
  
  try {
      const addimg = await RentModel.findOneAndUpdate(
        { _id:id },{ $push: { img1:img } },{ new:true }
      );
      res.status(201).json(addimg.img1);
      console.log("addimg" ,addimg.img1);
  } catch (err) {
    res.send(err);
    console.log("err");
  }
};
module.exports = { getRents ,postRent,getRent ,deletRent,updateRent ,deletRentAdmin ,AddImg2};
