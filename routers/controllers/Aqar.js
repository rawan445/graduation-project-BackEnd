const AqarModel= require("../../db/models/AqarModel")

// عرض جميع العقارات 
const geAqars = async (req,res)=>{
    try {
         const  Aqar = await AqarModel.find({});
        res.status(200).json( Aqar)
    } catch (error){
        res.send(error)
    }
}

//أضافه عقار
const postAqars= async (req, res)=>{
    const {TitleAqar, TypeAqar, imgAqar, LocationAqar, spaceAqar,City, NumberAqar} = req.body;
    const newAqar = new AqarModel({TitleAqar, TypeAqar, imgAqar, LocationAqar, spaceAqar,City, NumberAqar})
    try {
        const savedAqar = await newAqar.save()
         const  Aqar = await AqarModel.find({});
        res.status(200).json( Aqar)

    }catch (error){
        res.send(error)
    }
}
//حذف عقار 
const deleteAqar = async (req, res) => {
  // const id = req.params.id;
  // const user = req.token.userId;
  // try {
  //   const del = await catsModel.findOneAndDelete({ _id: id, user: user });
  //   if (del){
  //     res.send("deleted")
  //   }else{
  //     res.send("cant deleted")
  //   }
  // } catch (err) {
  //   res.send(err , "err");
  // }
};

module.exports = { geAqars, postAqars, deleteAqar };