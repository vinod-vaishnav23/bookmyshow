const express = require('express');
const { loginUser, registerUser, restPassword } = require('../controllers/userController');
const userRouter = express.Router();

// middleware
userRouter.use((req, res, next) => {
    console.log('I am logger at userRoute');
    next();
});

userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);
userRouter.post('/reset-password', restPassword);

module.exports = userRouter;