import axios from 'axios';
import {
    IS_INITIAL_POPULAR_MOVIES_LOADING,
    IS_INITIAL_POPULAR_MOVIES_SUCCESS,
    IS_INITIAL_POPULAR_MOVIES_FAIL,
    FETCH_MORE_POPULAR_MOVIES_SUCCESS,
    FETCH_MORE_POPULAR_MOVIES_LOADING,
    FETCH_MORE_POPULAR_MOVIES_ERROR
} from './types';
import client from '../FeathersClient'
import { toast } from "react-toastify";
import swal from 'sweetalert'




export const fetchInitialPopularMovies = () => async (dispatch, getState) => {
    dispatch({ type: IS_INITIAL_POPULAR_MOVIES_LOADING, })
    try {
        let popularMovies = await axios.get(`https://api.themoviedb.org/3/trending/all/week`, {
            params: { api_key: process.env.REACT_APP_API_KEY, page: 1 }
        });

        dispatch({ type: IS_INITIAL_POPULAR_MOVIES_SUCCESS, payload: popularMovies.data.results })

    } catch (error) {
        console.log(error)
        dispatch({ type: IS_INITIAL_POPULAR_MOVIES_FAIL, })
    }
}

export const fetchMorePopularMovies = () => async (dispatch, getState) => {
    const newPage = getState().popularMovies.page


    try {
        dispatch({ type: FETCH_MORE_POPULAR_MOVIES_LOADING });

        let popularMovies = await axios.get(`https://api.themoviedb.org/3/trending/all/week`, {
            params: { api_key: process.env.REACT_APP_API_KEY, page: newPage }
        });
        const updatedPopularMovies = [...getState().popularMovies.movies, ...popularMovies.data.results];
        dispatch({ type: FETCH_MORE_POPULAR_MOVIES_SUCCESS, payload: updatedPopularMovies })

    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_MORE_POPULAR_MOVIES_ERROR })

    }
}



