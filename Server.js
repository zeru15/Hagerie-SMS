const express = require('express')
const app = express()
const db = require('./db')
const StudentProfileRoute = require('./Routes/StudentProfileRoute')
const ParentProfileRoute = require('./Routes/ParentProfileRoute')
const AnnouncementRoute = require('./Routes/AnnouncementRoute')


// const studentInfo = require('./Models/StudentModel')
// const parentInfo = require('./Models/ParentModel')

app.use(express.json())

app.use('/api/studentInfo/', StudentProfileRoute)
app.use('/api/parentInfo/', ParentProfileRoute)
app.use('/api/announcements/', AnnouncementRoute)


/* app.get('/', (req, res) => res.send('Server Working!'));

app.get("/studentinfo", (req,res) => {
    
    studentInfo.find().then(
        (result) => {
            res.send(result)
        })
        .catch((err) => 
        console.log(err)
        )
})

app.post('/message' , (req, res) => {
    const messages = new message(req.body);
    messages.save().then((message) => {
        res.status(201).send(message);
}).catch((error) => {   
        res.status(400).send(error);
    })
})
*/


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listening on port ${port}!`))