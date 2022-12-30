const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, requried: true, unique: true, lowercase: true},
    password: {type: String, required: true},
    enabled: {type: Boolean, default: false},
    token: {type: String}
})

const parkSchema = new mongoose.Schema({
    name: {type: String, required: true, lowercase: true, unique: true},
    location: {type: String, required: true, lowercase: true},
    address: {type: String, required: true, lowercase: true},
    region: {type: String, required: true, lowercase: true},
    size: {type: String, required: true, lowercase: true},
    yearEstablished: {type: String, required: true, lowercase: true},
    phoneNumber: {type: String, required: true, lowercase: true}
})

module.exports.User = mongoose.model('admin-users', userSchema)
module.exports.Park = mongoose.model('parks', parkSchema)
