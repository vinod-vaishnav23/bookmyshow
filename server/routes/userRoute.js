const express = require('express');
const { loginUser, registerUser, restPassword } = require('../controllers/userController');
const userRouter = express.Router();

// middleware
userRouter.use((req, res, next) => {
    //@TODO: Validate user input -> sanitize input values.
    next();
});

userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);
userRouter.post('/reset-password', restPassword);

module.exports = userRouter;