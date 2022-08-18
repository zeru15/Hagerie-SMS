const express = require('express')
const router = express.Router();

const Announcement = require('../Models/AnnouncementModel')

router.get("/announcements", async(req, res) => {

    try{
        const announcement = await Announcement.find({})
        res.send(announcement)
    }catch(error) {
        return res.status(400).json({message: error});
    }

})

module.exports = router