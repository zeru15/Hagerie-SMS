const express = require('express')
const router = express.Router();

const StudentProfile = require('../Models/StudentModel')

router.get("/StudentInfo", async(req, res) => {

    try{
        const studentProfile = await StudentProfile.find({})
        res.send(studentProfile)
    }catch(error) {
        return res.status(400).json({message: error});
    }

})

module.exports = router