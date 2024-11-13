const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const encryptPassword = async (password) => {
    console.log(password);
    let encryptedPsw = await bcrypt.hash(password, 10);
    return encryptedPsw;
}

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

const validateUserData = (userInput) => {
    return true;
}

const generateToken = (user) => {
    const authToken = jwt.sign(user, process.env.JWT_TOKEN, { expiresIn: "15m" });
    return authToken;
}

const sendRegistrationMail = (user) => {
    return;
}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (!email) {
            throw new Error('Please enter your Email!');
        }
        if (!password) {
            throw new Error('Please enter your Password!');
        }

        let user = await UserModel.findOne({ email: email });
        if (!user) {
            throw new Error('Given email is not registered!!');
        }

        let isValid = await comparePassword(password, user.password);
        if (!isValid) {
            throw new Error('Incorrect email or password!');
        }

        const authToken = generateToken({ user: user.id });

        res.send({
            accessToken: authToken
        });
    } catch (err) {
        next(err);
    }
}

const registerUser = async (req, res, next) => {
    const userInput = req.body;
    try {
        // Validate
        validateUserData(userInput);

        // verify the given email if it already exists.
        let user = await UserModel.findOne({ email: userInput.email });
        if (user) {
            throw new Error('Given email is already registered!!');
        }

        // Encrypt the user password
        userInput.password = await encryptPassword(userInput.password);

        // store the user data in DB
        user = new UserModel(userInput);
        await user.save();

        // Send confirmation mail with account activation link.
        sendRegistrationMail();

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
