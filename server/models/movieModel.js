const mongoose = require('mongoose');
const MovieSchema = new mongoose.Schema(
    {
        movie_name: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = MovieSchema;