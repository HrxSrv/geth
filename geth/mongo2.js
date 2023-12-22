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
    workerid:String
})

const userinformation = mongoose.model("userinformation",newSchema)
const userhistoryinfo = mongoose.model("userhistoryinfo",historySchema)
module.exports = { userinformation, userhistoryinfo };
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