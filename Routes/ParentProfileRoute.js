const express = require('express')
const router = express.Router();

const ParentProfile = require('../Models/ParentModel')

router.get("/ParentInfo", async(req, res) => {

    try{
        const parentProfile = await ParentProfile.find({})
        res.send(parentProfile)
    }catch(error) {
        return res.status(400).json({message: error});
    }

})

module.exports = router