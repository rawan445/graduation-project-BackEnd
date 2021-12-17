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
//
// const {TitleAqar, TypeAqar, imgAqar, LocationAqar, spaceAqar,City, NumberAqar} = req.body;
// const newAqar = new AqarModel({TitleAqar, TypeAqar, imgAqar, LocationAqar, spaceAqar,City, NumberAqar})
// try {
//     const savedAqar = await newAqar.save()
//      const  Aqar = await AqarModel.find({});
//     res.status(200).json( Aqar)
// }catch (error){
//     res.send(error)
// }

//أضافه عقار
const postAqars=async(req,res)=>{
    const {TitleAqar,  TypeAqar,  imgAqar,  LocationAqar,   spaceAqar,  City,  NumberAqar}= req.body
    const newAqar = await AqarModel({TitleAqar,  TypeAqar,  imgAqar,  LocationAqar,   spaceAqar,  City,  NumberAqar})
    try {
        const savedAqar = await newAqar.save()
        const Aqar = await AqarModel.find({})
        res.status(200).json(Aqar)
    } catch (error) {
        res.send(error)
    }
}

//حذف عقار 


module.exports = { getAqars, postAqars};