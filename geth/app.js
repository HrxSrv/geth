const express = require("express")
const multer = require("multer")
const { userinformation, userhistoryinfo,workerrating } = require("./mongo2")
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

// app.get("/login", cors(), async (req, res) => {
//     const d = await userinformation.find()
//     res.json(d);
// })

app.post("/login", async (req, res) => {
    const { email, password } = req.body
    // console.log(email);
    try {
        const check = await userdata.findOne({ email: email })
        // console.log(check)  
        if (check.email === email && check.password === password && check) {
            res.json(check)
            console.log("1");
        }
        else 
        {
            res.json("notexist")
        }
    }
    catch (e) { 
       res.json("fail")
    }
})
app.get("/history", async (req, res) => {
    const { username } = req.query
    // console.log(req.query);
    try {
        const check = await userhistoryinfo.find({ uname: username })
        res.status(200).json(check)
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
})
app.get('/worker/:workerid', async (req, res) => {
    const { workerid } = req.params;
    console.log(workerid)
    try {
      // Fetch worker details from the database
      const workerDetails = await userinformation.findById(workerid);
  
      if (!workerDetails) {
        return res.status(404).json({ error: 'Worker not found' });
      }
  
      res.json(workerDetails);
    //   console.log(workerDetails)
    } catch (error) {
      console.error('Error fetching worker details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
app.post("/register", async (req, res) => {
    const { email, password, username } = req.body
    const data = {
        email: email,
        password: password,
        username: username
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

    try {

        const udata = new userdata(req.body)
        // console.log(udata)
        const id = udata.username

        const uinformation = await userdata.findOne({ username: id })
        if (uinformation) {
            uinformation.firstname = udata.firstname
            uinformation.lastname = udata.lastname
            uinformation.mobilenumber = udata.mobilenumber
            uinformation.occupation = udata.occupation
            uinformation.gender = udata.gender
            await uinformation.save()
            res.status(200).json("data saved")
        }
        else {
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
        else {
            res.json("not exist");
        }
    }

    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }

})

app.post('/contact', upload.single("file"), async (req, res) => {

    try {
        console.log(req.body)
        const file = req.file || {};
        console.log(file);
        const filepath = file.filename || "default.png";
        const { dob, email, experience, message, name, occupation, phone, states, wage, gender } = req.body;

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
            img: filepath,
            gender: gender
        }

        await userinformation.insertMany([workerdata])

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }

})
app.post('/confirmhire', async (req, res) => {
    try {
        const { uname, workerid, Hiredate } = req.body;
        // console.log(hiredWorker)
        const userHistoryData = {
            uname: uname,
            workerid: workerid,
            HireDate: Hiredate,
        };
        const userHistory = new userhistoryinfo(userHistoryData);
        await userHistory.save()
        res.status(200).json({ message: 'Hiring confirmed successfully' });
    } catch (error) {
        console.error('Error confirming hiring:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
app.post('/saveRating',async(req,res)=>{
    try{
       const {workerId,rating,username} = req.body;
    //    console.log(rating)
       const ratingNumber = parseInt(rating, 10);
       const RatingData={
           workerId:workerId,
           rating:ratingNumber,
           username:username,
       }
       const existingrating = await workerrating.findOne({workerId,username});
       if(existingrating)
       {
        await workerrating.findOneAndUpdate({ workerId, username }, { rating });
        res.status(200).json({ message: 'Rating updated successfully' });
       }
       else
       {
           const workerRatingData = new workerrating(RatingData)
           await workerRatingData.save()
           res.status(200).json({ message: 'Rating saved successfully' });
       }
    }catch(err)
    {
        console.error('Error confirming hiring:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
app.get('/hireworkers', async (req, res) => {
    try {
        const workers = await userinformation.find()
        res.json(workers)
        // console.log(workers[0])
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
})
app.listen(8000, () => {
    console.log("port connected");
})
app.get('/getAverageRating/:workerId', async (req, res) => {
    try {
        const { workerId } = req.params;
         console.log(workerId)
        // Aggregate to get average rating for the worker
        const result = await workerrating.aggregate([
            { $match: { workerId } },
            {
                $group: {
                    _id: null,
                    averageRating: { $avg: '$rating' },
                    totalRatings: { $sum: 1 }
                }
            }
        ]);

        if (result.length === 0) {
            // No ratings found for the worker
            res.status(404).json({ error: 'No ratings found for the worker' });
            return;
        }

        const averageRating = result[0].averageRating;
        const totalRatings = result[0].totalRatings;

        res.status(200).json({ averageRating, totalRatings });
    } catch (err) {
        console.error('Error getting average rating:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
