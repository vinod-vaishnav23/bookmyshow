const mongoose = require('mongoose');

const connectDB = async (db) => {
    try {
        await mongoose.connect(process.env.DB_CONN, { dbName: db });
        console.log('DB connection stablished.');
    } catch (err) {
        throw new Error(err);
        console.log('Unable to connect DB: ', err);
    }
}

module.exports = connectDB;