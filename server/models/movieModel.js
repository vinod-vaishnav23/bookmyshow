const mongoose = require('mongoose');
const MovieSchema = new mongoose.Schema(
    {
        movie_name: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        poster: {
            type: String,
            required: true,
        },
        released_on: {
            type: Date,
            required: true
        },
        about: {
            type: String,
            required: true,
        },
        genres: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

// @TODO: Add pre and post hooks.

module.exports = mongoose.model('movies', MovieSchema);