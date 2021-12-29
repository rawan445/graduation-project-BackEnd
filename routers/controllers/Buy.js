const BuyModel= require("../../db/models/BuyModel")
const userModel= require("../../db/models/userModel")

// عرض جميع العقارات 
const getBuys = async (req,res)=>{
    try {
    //   const check = await userModel.findOne({})
    // console.log(check,"hhhhhhhhhhhhhh");
    //   if(check.isAdmin == true){
        const  Buy = await BuyModel.find({});
        res.status(200).json( Buy)
        // console.log("aaaaaaaaaaaaa");
      // }else{
      //   res.send("error")
      //   console.log("nnnnnnnnnnnnnnnnnn");

      // }
      } catch (error){
        res.send(error)
        // console.log("xxxxx");

        
    }
}

const getBuy = async (req,res)=>{
  const {id} = req.params
  try {
       const  Buy = await BuyModel.findOne({ _id:id}).populate("user")
      //  console.log(Buy);
      res.status(200).json( Buy)
  } catch (error){
      res.send(error)
  }
}

//أضافه عقار
const postBuy=async(req,res)=>{
    const{name,  price,   img,  location,  space,  city, mobileNumber, description}= req.body;
    const user =req.token.userId
    const nrwAqar = new BuyModel({name,  price,img,location,space,  city, mobileNumber, description ,user})
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
  const user = req.token.userId;

  // console.log("user : ",user);
  try {
    const a = await BuyModel.findOne({_id: id})
    // console.log("a" ,a);
    const del = await BuyModel.findOneAndDelete({ _id: id, user: user });
    // console.log("id : ",id);
    // console.log("dal : ", del);
    if (del ){
      // console.log(del,"dddddddd");
      res.send("deleted")
    }else{
      res.send("cant deleted")
    }
  } catch (err) {
    res.send(err , "err");
  }
  };

  
  const deletBuyAdmin=async(req,res)=>{
  
    const id = req.params.id;
  const user = req.token.userId;
  // console.log("user : ",user);
  try {
    const check = await userModel.findOne({})
    const a = await BuyModel.findOne({_id: id})
    // console.log("a" ,a);
    const del = await BuyModel.findOneAndDelete({ _id: id });

    if(check.role == 1){

    if (del){
      console.log(del,"dddddddd");
     
      res.send(" role deleted")
    }else{
      res.send(" cant deleted")
      // console.log("cant deleted");
    }}else{
      res.send("error")
      // console.log("is not Admin",del);

    }
  } catch (err) {
    res.send(err , "err");
  }
  };

  //تحديث 
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


module.exports = { getBuys ,postBuy,deletBuy,getBuy ,updateBuy ,deletBuyAdmin };
