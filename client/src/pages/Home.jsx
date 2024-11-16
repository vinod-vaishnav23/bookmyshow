import React, { useState, useEffect } from "react";
import apiClient from "../util/api_client";
import MovieCard from "../components/MovieCard";

import { useSelector, useDispatch } from "react-redux";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const { placeHolders } = useSelector(store => store.movieState);
    console.log(placeHolders)

    useEffect(() => {
        setLoading(true);
        apiClient.get('movies')
            .then(response => {
                setMovies(response?.data);
                console.log(response);
            })
            .catch(err => {
                console.log(err?.response?.data);
                setError(err?.response?.data?.error);
            })
            .finally(() => {
                setLoading(false)
            });
    }, []);
    // Movies listing

    return <div className="home">
        <p>Carousel</p>
        <div className="movies-container">
            {
                loading ? <div className="loading">Loading...</div> :
                    error ? <div className="error">{error}</div> :
                        movies.map((movie, id) => <MovieCard movie={movie} key={id} />)
            }
        </div>
        <p>Live Events</p>
        <p>Tranding</p>
    </div>
}

export default Home;