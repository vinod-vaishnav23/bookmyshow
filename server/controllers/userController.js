const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const encryptPassword = (password) => {
    let encryptedPsw = password;
    return encryptedPsw;
}

const validateUserData = (userInput) => {
    return true;
}

const loginUser = async (req, res, next) => {
    const userInput = req.body;
    try {
        if (!userInput?.email) {
            throw new Error('Please enter your Email!');
        }
        if (!userInput?.password) {
            throw new Error('Please enter your Password!');
        }

        let user = await UserModel.findOne({ email: userInput.email });
        if (!user) {
            throw new Error('Given email is not registered!!');
        }
        if (user.password != encryptPassword(userInput.password)) {
            throw new Error('Incorrect email or password!');
        }

        // @TODO: Generate JWT token and share

        res.send({
            message: 'You logged in successfully.'
        });
    } catch (err) {
        next(err);
    }
}

const registerUser = async (req, res, next) => {
    const userInput = req.body;
    try {
        validateUserData(userInput);
        // verify the given email if it already exists.
        let user = await UserModel.findOne({ email: userInput.email });
        if (user) {
            throw new Error('Given email is already registered!!');
        }
        // Encrypt the user password
        userInput.password = encryptPassword(userInput.password);

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
