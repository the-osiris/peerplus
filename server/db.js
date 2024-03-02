const mongoose = require('mongoose');

const url = "mongodb+srv://raghavprasad87:K9DbzLt0NFJRFYMn@cluster0.e4vp7sk.mongodb.net/";

mongoose.connect(url);

const studentSchema = new mongoose.Schema({

       username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength:30
    },
    password: {
        type: String,
        required: true,
        minLength:6
    },
    firstName: {
        type: String,
        required: true,
        maxLength: 30,
        trim:true
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 30,
        trim:true
    }
});


const Student = mongoose.model('Student', studentSchema);

module.exports = { Student };