const movieModel = require('../models/movieModel');

const getMovies = (req, res) => {
    res.send([{
        title: 'Movie Name 1'
    },
    {
        title: 'Movie Name 2'
    }]
    );
}

const getMovieDetail = (req, res) => {
    res.send({
        title: 'Movie Name 1'
    })
}

const addMovie = (req, res) => {
    let inputData = req.body;

    // login required to add a movie.
    // only admin can add a movie

    res.send({
        message: `Movie: ${inputData.title} - Added`
    });
}

module.exports = {
    getMovies,
    getMovieDetail,
    addMovie
}