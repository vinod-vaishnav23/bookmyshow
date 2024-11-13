const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(" ")[1];

    if (!token) {
        res.status(401).send({
            error: 'Access Denied!'
        });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_TOKEN);
        console.log("User: ", user);
        req.loggedInUser = user;
        next();
    } catch (err) {
        res.status(401).send({
            error: 'Invalid Token!'
        });
    }
}

module.exports = {
    authenticateUser
}