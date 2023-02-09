const mongoose = require('mongoose');

const movieLocationSchema = new mongoose.Schema({
    _id: {
      type: String
    },
    locations: {
      type: Array
    }
})

module.exports = mongoose.model('movielocation', movieLocationSchema)