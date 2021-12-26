const RentModel= require("../../db/models/RentModel")

// عرض ا
const getRents = async (req,res)=>{
    try {
         const  Rent = await RentModel.find({});
        res.status(200).json(Rent)
    } catch (error){
        res.send(error)
    }
}
//تفاصيل
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
//أضافه عقار
const postRent=async(req,res)=>{
    const{name,price,img,location,space,city, mobileNumber, description}= req.body;
    const user =req.token.userId
    const newSale = new RentModel({name,price,img,location,space,city, mobileNumber, description ,user})
    try {
        const saved= await newSale.save()
         const Rent = await RentModel.find({}).populate("user")
        res.status(200).json(Rent)
  
    } catch (error) {
        res.send(error)
    }
}
///
// const deletRent = async (req, res) => {
//     const id = req.params.id;
//     const user = req.token.userId;
//     try {
//       const del = await RentModel.findOneAndDelete({ _id: id, user: user });
//       if (del){
//         res.send("deleted")
//       }else{
//         res.send("cant deleted")
//       }
//     } catch (err) {
//       res.send(err , "err");
//     }

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


module.exports = { getRents ,postRent,getRent ,deletRent,updateRent};