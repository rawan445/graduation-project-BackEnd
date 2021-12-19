const AqarModel= require("../../db/models/AqarModel")

// عرض جميع العقارات 
const getAqars = async (req,res)=>{
    try {
         const  Aqar = await AqarModel.find({});
        res.status(200).json( Aqar)
    } catch (error){
        res.send(error)
    }
}

const getAqar = async (req,res)=>{
  const {id} = req.params
  try {
       const  Aqar = await AqarModel.findOne({ _id:id}).populate("user")
       console.log(Aqar);
      res.status(200).json( Aqar)
  } catch (error){
      res.send(error)
  }
}

//أضافه عقار
const postAqars=async(req,res)=>{
    const{TitleAqar,  TypeAqar,  imgAqar,  LocationAqar,   spaceAqar,  City, NumberAqar}= req.body;
    const user =req.token.userId
    const nrwAqar = new AqarModel({TitleAqar,  TypeAqar,  imgAqar,  LocationAqar,   spaceAqar,  City,  NumberAqar, user})
    try {
        const saved= await nrwAqar.save()
         const Aqar = await AqarModel.find({}).populate("user")
        res.status(200).json(Aqar)
  
    } catch (error) {
        res.send(error)
    }
}

//حذف عقار 
const deletAqars=async(req,res)=>{
    const id = req.params.id;
    const user = req.token.userId;
    try {
      const del = await AqarModel.findOneAndDelete({ _id:id, user: user });
      if (del){
        res.send("deleted")
      }else{
        res.send("cant deleted")
      }
    } catch (err) {
      res.send(err , "err");
    }
  };

module.exports = { getAqars, postAqars,deletAqars,getAqar};