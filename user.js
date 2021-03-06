const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const UserSchema = new Schema({
    email: String,
    password: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
