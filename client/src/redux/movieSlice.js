import { createSlice } from '@reduxjs/toolkit';
import apiClient from '../util/api_client';

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        loading: false,
        placeHolders: [
            {
                "id": 1,
                "movie": "The Shawshank Redemption",
                "rating": 9.2,
                "image": "images/shawshank.jpg",
                "imdb_url": "https://www.imdb.com/title/tt0111161/"
            },
            {
                "id": 2,
                "movie": "The Godfather",
                "rating": 9.2,
                "image": "images/godfather.jpg",
                "imdb_url": "https://www.imdb.com/title/tt0068646/"
            },
            {
                "id": 3,
                "movie": "The Dark Knight",
                "rating": 9,
                "image": "images/dark_knight.jpg",
                "imdb_url": "https://www.imdb.com/title/tt0468569/"
            },
            {
                "id": 4,
                "movie": "Pulp Fiction",
                "rating": 8.9,
                "image": "images/pulp_fiction.jpg",
                "imdb_url": "https://www.imdb.com/title/tt0110912/"
            },
            {
                "id": 5,
                "movie": "The Lord of the Rings: The Return of the King",
                "rating": 9,
                "image": "images/lotr_return_king.jpg",
                "imdb_url": "https://www.imdb.com/title/tt0167260/"
            },
            {
                "id": 6,
                "movie": "The Good, the Bad and the Ugly",
                "rating": 8.8,
                "image": "images/good_bad_ugly.jpg",
                "imdb_url": "https://www.imdb.com/title/tt0060196/"
            }
        ]
    },
    reducers: {
        setMovies: (state, action) => {
            const { payload } = action;
            return {
                ...state,
                movies: payload,
            }
        },
        setLoading: (state, action) => {
            const { payload } = action;
            return {
                ...state,
                loading: payload
            }
        }
    }
});

export const getMovies = (params) => async (dispatch) => {
    const { actions } = movieSlice;

    dispatch(actions.setLoading(true));

    apiClient.get('movies')
        .then(response => dispatch(actions.setMovies(response.data)))
        .catch(error => console.log(error))
        .finally(() => {
            dispatch(actions.setLoading(false));
        })
}

export default movieSlice;