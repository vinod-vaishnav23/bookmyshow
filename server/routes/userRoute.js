const express = require('express');
const { loginUser, registerUser } = require('../controllers/userController');
const userRouter = express.Router();

userRouter.use((req, res, next) => {
    console.log(req);
    next();
});

userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);

userRouter.post('/forget-password', (req, res) => {
    res.send({
        message: 'your password has been reset and shared on mail.'
    });
});

module.exports = userRouter;