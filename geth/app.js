const express = require("express")
const userinformation = require("./mongo2")
const userdata = require('./mongo')
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get("/login",cors(),async(req,res)=>{
    const d = await userinformation.find()
    res.json(d);
})

// app.get('/userprofile',cors(),async(req,res)=>{
//     const {email,password} = req.body
//     console.log(req.body)
//     const emails = await collection.findOne({email:email})
//     res.json(emails)
// })
app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await userinformation.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }
})
app.post("/register",async(req,res)=>{
    const{email,password}=req.body
    const data={
        email:email,
        password:password
    }
    try{
        const check=await userinformation.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await userinformation.insertMany([data])
        }
    }
    catch(e){
        res.json("fail")
    }
})
app.post('/userprofile',async(req,res)=>{
    const udata = new userdata(req.body)
    await udata.save()

    
    res.status(201).json(req.body)
})
app.patch('/useraddress', async(req,res)=>{
//    const adddata = new userdata(req,res)
try{
  // const id = req.params.id
   //console.log(id)
   const daaata = await userdata.findOne({mobilenumber:7379914045})
   const updatedAddress = req.body
   //console.log(daaata)
   console.log(updatedAddress)
   daaata.address = updatedAddress.address
   await daaata.save()
   res.status(200).json(req.body)
}
catch(err){
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
}
})
app.listen(8000,()=>{
    console.log("port connected");
})
