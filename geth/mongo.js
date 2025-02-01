const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost:27017/first-website",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })

// .then(()=>{
//     console.log("mongodb connected");
// })
// .catch(()=>{
//     console.log('failed');
// })

const { MongoClient, ServerApiVersion } = require('mongodb');

mongoose.connect("mongodb+srv://upadhyaygaurav450:0gWr1suv6Jl0QXGf@cluster0.mvj3y.mongodb.net/getH?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose connected to MongoDB Atlas!");
  })
  .catch((err) => {
    console.error("Mongoose connection failed:", err);
  });

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
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    firstname:String,  //title:{type: String} aise bhi likh skte h
    lastname: String,
    mobilenumber: Number,
    occupation:String,
    gender:String,
    image:String,
    address: addressSchema
})

const userdata = mongoose.model("userdata",newUserdata)
module.exports = userdata;