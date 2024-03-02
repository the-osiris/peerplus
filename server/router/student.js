const { Student } = require('../db.js');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const router = Router();
const {studentValidation, signinBody, editBody} = require('../type/studentType');
const {JWT_SECRET} = require('../config.js');
const { authMiddleware } = require('../middlewares/authMiddleware.js');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const session = require('express-session');
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // set to true if you're using https
}));
//Configuring nodemailer

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'raghavprasad98@gmail.com',
        pass:'9838618149'
    }
});


router.post('/signup', async (req, res) => {
    const { success } = studentValidation.safeParse(req.body)

    if (!success) {
        return res.status(411).send({ message: "Incorrect inputs" })
    }
    if (await Student.findOne({ username: req.body.username })) {
        return res.status(411).send({ message: "Email already taken / Incorrect inputs" })
    }

    //Generate OTP
    const otp= crypto.randomBytes(3).toString('hex');
    console.log(otp);

    //send otp
    let mailOptions = {
        from: 'raghavprasad98@gmail.com',
        to: req.body.username,
        subject: 'OTP for email verification',
        text: `Your OTP is ${otp}`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    const user = await Student.create({
        username: req.body.username,
        password: req.body.password,
    })
    const token = jwt.sign(
        {userId:user._id}
        , JWT_SECRET)
    
    return res.status(200).send({
       message: "OTP sent to email. Please verify to complete registration",
        token: token
    });
    
})
+
router.post('/signin', async (req, res) => {
    
     const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const user = await Student.findOne({ username: req.body.username, password: req.body.password })
    console.log(user);
    if (user) {
        const userId = user._id
        console.log(userId)
        // user._id is not a string but an object console.log(userId)
        const token = jwt.sign({ userId}, JWT_SECRET )
        return res.status(201).send({ "token": token })
    }
    
    else {
         return res.status(411).json({
        message: "Error while logging in"
    })
    }
    
})

router.put('/', authMiddleware, async (req, res) => {
    const { success } = editBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    console.log("here")
   const updated= await Student.updateOne({_id:req.userId},req.body)
    console.log(updated)
    res.status(201).send({ message: "Updated successfully" })
})

router.post('/verify', async (req, res) => {
    const { username, otp } = req.body;

    // Retrieve the user and stored OTP from the database
    const user = await Student.findOne({ username: username });
    const storedOtp = /* retrieve stored OTP for this user */;

    if (!user || !storedOtp) {
        return res.status(400).send({ message: 'Invalid request' });
    }

    // Compare the submitted OTP with the stored OTP
    if (otp === storedOtp) {
        // If they match, mark the user's email as verified
        user.isVerified = true;
        await user.save();

        // Clear the stored OTP
        // ...

        res.status(200).send({ message: 'Email verified successfully' });
    } else {
        res.status(400).send({ message: 'Invalid OTP' });
    }
});

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await Student.find({
        $or: [{
            username: {
                "$regex": filter
            }
        }
        ]
    })

    res.json({
       users
    })
})
module.exports = router