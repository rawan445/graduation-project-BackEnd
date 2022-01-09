const BuyModel= require("../../db/models/BuyModel")

// all buys
const getBuys = async (req,res)=>{
    try {
        const  Buy = await BuyModel.find({});
        res.status(200).json( Buy)
      } catch (error){
        res.send(error)     
    }
}

// one buy
const getBuy = async (req,res)=>{
  const {id} = req.params
  try {
       const  Buy = await BuyModel.findOne({ _id:id}).populate("user")
      res.status(200).json( Buy)
  } catch (error){
      res.send(error)
  }
}

// add buy
const postBuy=async(req,res)=>{
    const{name,  price,   img,  location,  space,  city, mobileNumber, description}= req.body;
    const user =req.token.userId
    const nrwAqar = new BuyModel({name,  price,img,location,space,  city, mobileNumber, description ,user})
    try {
        const saved= await nrwAqar.save()
        res.status(200).json(saved)
  
    } catch (error) {
        res.send(error)
    }
}

//delete buy
const deletBuy=async(req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  try {
    const del = await BuyModel.findOneAndDelete({ _id: id, user: user });
    if (del ){
      res.send("deleted")
    }else{
      res.send("cant deleted")
    }
  } catch (err) {
    res.send(err , "err");
  }
  };

// update buy
const updateBuy = async (req , res) => {
    const id = req.params.id;
    
    const{name,  price,   img,  location,  space,  city, mobileNumber, description}= req.body;
    try {
      const updateBuy = await BuyModel.findOneAndUpdate( { _id: id},
     { name,  price,   img,  location,  space,  city, mobileNumber, description }, { new: true });
      res.status(201).json(updateBuy);
    } catch (error) {
      res.send({ message: error });
    }
  };

    // delete buy (Admin)
    const deletBuyAdmin=async(req,res)=>{
      const id = req.params.id;
      console.log(id);
      try {
        const del = await BuyModel.findOneAndDelete({ _id: id });
        if (del ){
          res.send("deleted")
        }else{
          res.send("cant deleted")
        }
      } catch (err) {
        res.send(err , "err");
      }    
    
    };

module.exports = { getBuys ,postBuy,deletBuy,getBuy ,updateBuy ,deletBuyAdmin };
