import React from 'react';

const MovieCard = ({ movie }) => {
    const { title, poster, genres } = movie;
    return (
        <div className='movie-card'>{title}</div>
    );
}

export default MovieCard;
