const mongoose = require('mongoose')

const testSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is requried']
    },
    number: {
        type: Number,
        default: 12
    }
}, { timestamps: true })

const test = mongoose.model('Vishal', testSchema)

module.exports = test