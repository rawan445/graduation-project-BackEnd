
const QuestionsModel = require("../../db/models/QuestionsModel");

//////////////////
const getQuest = async (req,res)=>{
  try {
      const  Buy = await QuestionsModel.find({});
      res.status(200).json( Buy)
    } catch (error){
      res.send(error)     
  }
}
const getanswer = async (req,res)=>{
  try {
      const  Buy = await QuestionsModel.find({});
      res.status(200).json( Buy)
    } catch (error){
      res.send(error)     
  }
}
const postQuest =async(req,res) =>{
  const{Questions}= req.body;
  const nrwAqar = new QuestionsModel({Questions})
  console.log("fff:",nrwAqar);
  try {
      const saved= await nrwAqar.save()
      res.status(200).json(saved)

  } catch (error) {
      res.send(error)
      console.log(nnnn);

  }
    
}
const postanswer = async (req, res) => {
  try {
    const {answer} = req.body;
  // const id = req.params.id;
  // const user = req.token.userId;
  // const userName=req.token.userName
  // console.log(id , user ,userName);
  const response  = await  QuestionsModel.findOneAndUpdate({ _id: id }
  ,{ $push: { answer: {answer} } },{new: true})
  //الكي اللي اسمه كومنت يكون داخله اسم اليوزر و الكومينت الجديد
  res.status(200).json(response.answer)
  } catch (error) {
    res.status(400).json(error)
  }
  };

 
module.exports = { postanswer,postQuest ,getQuest ,getanswer};
