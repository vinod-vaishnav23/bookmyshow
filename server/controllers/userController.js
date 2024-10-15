const userModel = require('../models/userModel');

const loginUser = (req, res) => {
    //@TODO: Validate user input -> sanitize input values.

    //@TODO: perform user validation based on given username and password.
    //@TODO: if user logged in successful generate JWT and share as response.

    res.send({
        message: 'You logged in successfully.'
    })
}

const registerUser = (req, res) => {
    //@TODO: Validate user input -> sanitize input values.

    //@TODO: verify if given email is not exists already.
    //@TODO: store user data in DB 
    //@TODO: Send confirmation mail with account activation link.
    //@TODO: send response.

    res.send({
        message: 'You are registered successfully.'
    });
}

module.exports = {
    loginUser,
    registerUser
}
