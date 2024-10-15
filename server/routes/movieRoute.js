const express = require('express');
const { getMovies, getMovieDetail, addMovie } = require('../controllers/movieController');

const movieRouter = express.Router();

movieRouter.use((req, res, next) => {
    console.log(req);
    next();
});

movieRouter.get('/', getMovies);
movieRouter.get('/:movieId', getMovieDetail);
movieRouter.post('/', addMovie);

module.exports = movieRouter;
