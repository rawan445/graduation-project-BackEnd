const BuyModel= require("../../db/models/BuyModel")

// عرض جميع العقارات 
const getBuys = async (req,res)=>{
    try {
         const  Buy = await BuyModel.find({});
        res.status(200).json( Buy)
    } catch (error){
        res.send(error)
    }
}

const getBuy = async (req,res)=>{
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
const postBuy=async(req,res)=>{
    const{name,  price,   img,  location,  space,  city, mobileNumber, description}= req.body;
    const user =req.token.userId
    const nrwAqar = new BuyModel({name,  price,   img,  location,  space,  city, mobileNumber, description})
    try {
        const saved= await nrwAqar.save()
         const Buy = await BuyModel.find({}).populate("user")
        res.status(200).json(Buy)
  
    } catch (error) {
        res.send(error)
    }
}

//حذف عقار 
const deletBuy=async(req,res)=>{
    const id = req.params.id;
    // const user = req.token.userId;
    // console.log(user);
    try {
      const del = await BuyModel.findOneAndDelete({ _id:id,
        //  user: user
         });
      if (del){
        res.send("deleted")
      }else{
        res.send("cant deleted")
      }
    } catch (err) {
      res.send(err , "err");
    }
  };

module.exports = { getBuys ,postBuy,deletBuy,getBuy };