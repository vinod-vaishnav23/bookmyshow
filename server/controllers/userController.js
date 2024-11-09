const UserModel = require('../models/userModel');
const uuid = require('uuid');

const loginUser = (req, res) => {
    //@TODO: Validate user input -> sanitize input values.

    //@TODO: perform user validation based on given username and password.
    //@TODO: if user logged in successful generate JWT and share as response.
    console.log(uuid.v4());
    res.send({
        message: 'You logged in successfully.'
    })
}

const registerUser = async (req, res, next) => {
    //@TODO: Validate user input -> sanitize input values.
    const userInput = req.body;
    try {
        // verify the given email if it already exists.
        let user = await UserModel.findOne({ email: userInput.email });
        if (user) {
            throw new Error('Given email is already registered!!');
        }
        //@TODO: Encrypt the user password

        // store the user data in DB
        user = new UserModel(userInput);
        await user.save();
        // Send confirmation mail with account activation link.

        res.send({
            message: 'Confirmation mail is sent to your registered email.'
        });
    } catch (err) {
        next(err);
    }
}

const restPassword = (req, res) => {
    res.send({
        message: 'your password has been reset and shared on mail.'
    });
}

module.exports = {
    loginUser,
    registerUser,
    restPassword,
}
