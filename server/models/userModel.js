const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: false,
    }
}, { timestamps: true });

// @TODO: add pre and post hooks
const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
