const express = require("express")
const multer = require("multer")
const userinformation = require("./mongo2")
const userdata = require('./mongo')
const cors = require("cors")
const { json } = require("react-router-dom")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../geth/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage: storage });

app.get("/login", cors(), async (req, res) => {
    const d = await userinformation.find()
    res.json(d);
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const check = await userdata.findOne({ email: email })
        console.log(check.password)  
        if (check.email===email && check.password===password) {
            res.json(check)
        }
        else {
            res.json("notexist")
        }

    }
    catch (e) {
        res.json("fail")
    }
})
app.post("/register", async (req, res) => {
    const { email, password,username } = req.body
    const data = {
        email: email,
        password: password,
        username:username
    }
    try {
        const check = await userdata.findOne({ email: email })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await userdata.insertMany([data])
        }
    }
    catch (e) {
        res.json("fail")
    }
})
app.post('/userprofile', async (req, res) => {

    try{

        const udata = new userdata(req.body)
        // console.log(udata)
        const id = udata.username
    
        const uinformation = await userdata.findOne({username: id})
        if(uinformation)
        {
            uinformation.firstname = udata.firstname
            uinformation.lastname = udata.lastname
            uinformation.mobilenumber = udata.mobilenumber
            uinformation.occupation = udata.occupation
            uinformation.gender = udata.gender
            await uinformation.save()
            res.status(200).json("data saved")
        }
        else
        {
            res.json("not exist");
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
    // await udata.save()


    // res.status(201).json(req.body)
})
app.patch('/useraddress', async (req, res) => {
    //    const adddata = new userdata(req,res)
    try {
        //    const id = req.query['m-number'];
        //    console.log(id)
        const updatedAddress = req.body
        const id = updatedAddress.username
        console.log(updatedAddress);
        const daaata = await userdata.findOne({ username: id })
 
        if (daaata) {
            daaata.address = updatedAddress.address
            await daaata.save()
            res.status(200).json(req.body)
        }
        else{
            res.json("not exist");
        }
    }

    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }

})

app.post('/contact', upload.single("file"),async(req,res)=>{

    try{
        console.log(req.body)
        const file = req.file || {};
        console.log(file);
        const filepath =  file.filename || "default.png";
        const {dob , email, experience,message,name,occupation,phone,states,wage,gender} = req.body;

         const workerdata = {
            email: email,
            dob: dob,
            experience: experience,
            message: message,
            name: name,
            occupation: occupation,
            phone: phone,
            states: states,
            wage: wage,
            img:filepath,
            gender:gender
        }
        
        await userinformation.insertMany([workerdata])

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }

})
app.get('/hireworkers',async(req,res)=>{
    try{
        const workers = await userinformation.find()
        res.json(workers)
        // console.log(workers[0])
    }
    catch(err)
    {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})
app.listen(8000, () => {
    console.log("port connected");
})
