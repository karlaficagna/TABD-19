const mongoose = require('mongoose')

const Animal = mongoose.model('Animal', {
    raca: String,
    peso: Number,
    filhote: Boolean
})

module.exports = Animal