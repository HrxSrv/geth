const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/first-website",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=>{
    console.log("mongodb2 connected");
})
.catch(()=>{
    console.log('failed');
})
const newSchema=new mongoose.Schema({
    email:String,
    experience:String,
    name:String,
    message:String,
    occupation:String,
    states:String,
    wage:String,
    phone:Number,
    dob:Date,
    img:String,
    gender:String
})
const historySchema=new mongoose.Schema({
    uname:String,
    workerid:String,
    HireDate:Date
})
const ratingSchema=new mongoose.Schema({
    workerId:String,
    rating:Number,
    username:String
})
const userinformation = mongoose.model("userinformation",newSchema)
const userhistoryinfo = mongoose.model("userhistoryinfo",historySchema)
const workerrating = mongoose.model("workerrating",ratingSchema)
module.exports = { userinformation, userhistoryinfo, workerrating };
// module.exports=userhistoryinfo;
// {   "firstname":"gaurav",
//     "address":{
//     "name":"gaurav",
//     "mnumber":"123",
//     "pincode":"221402",
//     "locality":"cdA",
//     "address_1":"ijnvkadc",
//     "city":"bhadohi",
//     "state":"up",
//     "landmark":"sdcz",
//     "addtionalnumber":"89562"
// }
// }