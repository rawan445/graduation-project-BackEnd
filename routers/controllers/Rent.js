const RentModel= require("../../db/models/RentModel")

// عرض جميع العقارات 
const getRents = async (req,res)=>{
    try {
         const  Rent = await RentModel.find({});
        res.status(200).json(Rent)
    } catch (error){
        res.send(error)
    }
}
const getRent = async (req,res)=>{
    const {id} = req.params
    try {
         const  Buy = await BuyModel.findOne({ _id:id}).populate("user")
         console.log(Buy);
        res.status(200).json( Buy)
    } catch (error){
        res.send(error)
    }
  }
//أضافه عقار
const postRent=async(req,res)=>{
    const{name,price,img,location,space,city, mobileNumber, description}= req.body;
    const user =req.token.userId
    const newSale = new RentModel({name,price,img,location,space,city, mobileNumber, description})
    try {
        const saved= await newSale.save()
         const Rent = await RentModel.find({}).populate("user")
        res.status(200).json(Rent)
  
    } catch (error) {
        res.send(error)
    }
}
///
const deleteRent = async (req, res) => {
    const id = req.params.id;
    const user = req.token.userId;
    try {
      const del = await catsModel.findOneAndDelete({ _id: id, user: user });
      if (del){
        res.send("deleted")
      }else{
        res.send("cant deleted")
      }
    } catch (err) {
      res.send(err , "err");
    }
}

module.exports = { getRents ,postRent,getRent ,deleteRent};
