const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({

    img: {type: String},
    firstname: {type: String, require},
    lastname: {type: String, require},
    email: {type: String, require},
    phone: {type: String},
    age: {type: Number},
    dateOfBirth: { type: String },
    sex: {type: String},
    nationality: {type: String},
    region: {type: String},
    city: {type: String},
    postalCode: {type: Number},
    contactName: {type: String},
    contactAddress: {type: String},
    contactPhone: {type: String},
    height: {type: Number},
    weight: {type: Number},
    bloodType: {type: String},
    eyeColor: {type: String},
    currentMedication: {type: String}
},
)

const StudentModel = mongoose.model('studentinfo', studentSchema)

module.exports = StudentModel