const mongoose = require('mongoose')

const parentSchema = mongoose.Schema({

    pImg: {type: String},
    pFirstName: {type: String, require},
    pLastName: {type: String, require},
    pEmail: {type: String, require},
    pPhone: {type: String},
    pRegion: {type: String},
    pCity: {type: String},
    pPostalCode: {type: Number},
    pStreetAddress: {type: String}
},
)

const ParentModel = mongoose.model('parentinfo', parentSchema)

module.exports = ParentModel