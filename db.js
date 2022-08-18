const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://zeruf5:ZerU1519@student.3mbjgpg.mongodb.net/student'

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , () => {
    console.log('Mongodb connected successfully!!!')
})

db.on('error' , () => {
    console.log('Mongodb connection failed')
})

module.exports = mongoose