import axios from 'axios';
import {
    IS_INITIAL_NOW_PLAYING_MOVIES_LOADING,
    IS_INITIAL_NOW_PLAYING_MOVIES_SUCCESS,
    IS_INITIAL_NOW_PLAYING_MOVIES_FAIL,
} from './types';
import client from '../FeathersClient'
import { toast } from "react-toastify";
import swal from 'sweetalert'




export const fetchInitialNowPlayingMovies = () => async (dispatch, getState) => {
    dispatch({ type: IS_INITIAL_NOW_PLAYING_MOVIES_LOADING, })
    try {
        let nowPlayingMovies = await axios.get(`https://api.themoviedb.org/3/movie/now_playing`, {
            params: { api_key: process.env.REACT_APP_API_KEY, page: 1, language: "en-US" }
        });

        dispatch({ type: IS_INITIAL_NOW_PLAYING_MOVIES_SUCCESS, payload: nowPlayingMovies.data.results })

    } catch (error) {
        console.log(error)
        dispatch({ type: IS_INITIAL_NOW_PLAYING_MOVIES_FAIL, })
    }
}



