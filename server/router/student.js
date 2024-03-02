const { Student } = require('../db.js');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const router = Router();
const {studentValidation, signinBody, editBody} = require('../type/studentType');
const {JWT_SECRET} = require('../config.js');
const { authMiddleware } = require('../middlewares/authMiddleware.js');

router.post('/signup', async (req, res) => {
    const { success } = studentValidation.safeParse(req.body)

    if (!success) {
        return res.status(411).send({ message: "Incorrect inputs" })
    }
    if (await Student.findOne({ username: req.body.username })) {
        return res.status(411).send({ message: "Email already taken / Incorrect inputs" })
    }
    const user = await Student.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    const token = jwt.sign(
        {userId:user._id}
        , JWT_SECRET)
    
    return res.status(200).send({
        message: "Student created successfully",
        token: token
    });
    
})


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


router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await Student.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
       users
    })
})
module.exports = router