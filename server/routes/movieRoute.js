const express = require('express');
const { getMovies, getMovieDetail, addMovie } = require('../controllers/movieController');
const { authenticateUser } = require('../middlewares/authUser');

const movieRouter = express.Router();

movieRouter.use((req, res, next) => {
    console.log(req);
    next();
});

movieRouter.get('/', getMovies);
movieRouter.get('/:movieId', getMovieDetail);
movieRouter.post('/', authenticateUser, addMovie);

module.exports = movieRouter;
