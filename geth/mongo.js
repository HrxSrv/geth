const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/first-website",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})



const addressSchema = new mongoose.Schema({
    name: String,
    mnumber: Number,
    pincode: Number,
    locality: String,
    address_1: String,
    city: String,
    state: String,
    landmark: String,
    addtionalnumber: Number
});
const newUserdata = new mongoose.Schema({
    firstname:String,  //title:{type: String} aise bhi likh skte h
    lastname: String,
    mobilenumber: Number,
    e_mail:String,
    occupation:String,
    gender:String,
    address: addressSchema
})

const userdata = mongoose.model("userdata",newUserdata)
module.exports = userdata;