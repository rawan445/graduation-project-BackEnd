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
    const{name,  price,   img,  location,  space,  city, mobileNumber, description ,bedRooms,LivingRoom ,bathRoom , roleA, propertyAge}= req.body;
    const user =req.token.userId
    const nrwAqar = new BuyModel({name,  price,img,location,space,  city, mobileNumber, description ,bedRooms,LivingRoom ,bathRoom , roleA, propertyAge,user})
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
    
    const{name,  price,   img,  location,  space,  city, mobileNumber, description,bedRooms,LivingRoom ,bathRoom , roleA, propertyAge}= req.body;
    try {
      const updateBuy = await BuyModel.findOneAndUpdate( { _id: id},
     { name,  price,   img,  location,  space,  city, mobileNumber, description ,bedRooms,LivingRoom ,bathRoom , roleA, propertyAge}, { new: true });
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

    const AddImg = async (req, res) => {
      const { id } = req.params;
      const { img} = req.body;
      console.log("id",id ,"img", img);
      
      try {
          const addimg = await BuyModel.findOneAndUpdate(
            { _id:id },{ $push: { img1:img } },{ new:true }
          );
          res.status(201).json(addimg.img1);
          console.log("addimg.img1" ,addimg.img1);
      } catch (err) {
        res.send(err);
        console.log("err");
      }
    };

module.exports = { getBuys ,postBuy,deletBuy,getBuy ,updateBuy ,deletBuyAdmin,AddImg };
