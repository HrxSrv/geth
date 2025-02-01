const mongoose = require("mongoose")
require('dotenv').config();
// mongoose.connect("mongodb://localhost:27017/first-website",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(()=>{
//     console.log("mongodb2 connected");
// })
// .catch(()=>{
//     console.log('failed');
// })
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Mongoose connected to MongoDB Atlas 2!");
})
.catch((err) => {
  console.error("Mongoose connection failed:", err);
});
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
const reviewSchema=new mongoose.Schema({
    username:String,
    review:String
})
const paymentSchema = new mongoose.Schema({
    razorpay_order_id: {
      type: String,
      required: true,
    },
    razorpay_payment_id: {
      type: String,
      required: true,
    },
    razorpay_signature: {
      type: String,
      required: true,
    },
  });

const userinformation = mongoose.model("userinformation",newSchema)
const userhistoryinfo = mongoose.model("userhistoryinfo",historySchema)
const workerrating = mongoose.model("workerrating",ratingSchema)
const userreview = mongoose.model("userreview",reviewSchema)
const Payment = mongoose.model("Payment",paymentSchema)
module.exports = { userinformation, userhistoryinfo, workerrating,userreview,Payment };
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