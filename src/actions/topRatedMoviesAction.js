import axios from 'axios';
import {
    IS_INITIAL_TOP_RATED_MOVIES_LOADING,
    IS_INITIAL_TOP_RATED_MOVIES_SUCCESS,
    IS_INITIAL_TOP_RATED_MOVIES_FAIL,
} from './types';
import client from '../FeathersClient'
import { toast } from "react-toastify";
import swal from 'sweetalert'




export const fetchInitialTopRatedMovies = () => async (dispatch, getState) => {
    dispatch({ type: IS_INITIAL_TOP_RATED_MOVIES_LOADING, })
    try {
        let topRatedMovies = await axios.get(`https://api.themoviedb.org/3/movie/top_rated`, {
            params: { api_key: process.env.REACT_APP_API_KEY, page: 1, language: "en-US" }
        });

        dispatch({ type: IS_INITIAL_TOP_RATED_MOVIES_SUCCESS, payload: topRatedMovies.data.results })

    } catch (error) {
        console.log(error)
        dispatch({ type: IS_INITIAL_TOP_RATED_MOVIES_FAIL, })
    }
}



