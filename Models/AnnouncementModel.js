const mongoose = require('mongoose')

const announcementSchema = mongoose.Schema({

    title: {type: String, require},
    subtitle: {type: String},
    message: {type: String, require}
}
)

const AnnouncementModel = mongoose.model('announcements', announcementSchema)

module.exports = AnnouncementModel