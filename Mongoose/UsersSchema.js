const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const UsersModel = mongoose.model('users', UsersSchema);

module.exports = UsersModel;
